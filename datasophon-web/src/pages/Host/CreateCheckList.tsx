import { ProTable } from "@ant-design/pro-components"
import { Button, Space, message } from "antd"
import { useParams } from "react-router-dom"
import { APIS } from "../../services/cluster"
import { useTranslation } from "react-i18next"
import { useRef } from "react"


type ListType = {
    data: any
}

const CreateCheckList = (props: ListType) => {
    const { t } = useTranslation()
    const { clusterId } = useParams()
    let currentSelectedRowKeys: (string | number)[] = [];
    const actionRef = useRef<any>();
    const analysisColumns = [
        { 
            dataIndex: 'index',
            valueType: 'indexBorder',
            width: 48
        },
        {
          title: '主机',
          dataIndex: 'hostname'
        },
        {
          title: '当前受管',
          dataIndex: 'managed',
          render: (text, record, _, action) => {
            return record.managed === true ? '是' : '否'
          }
        },
        {
          title: '检查结果',
          dataIndex: 'checkResult',
          render: (text, record, _, action) => {
            return record.checkResult?.msg
          }
        },{
          title: t('user.operation'),
          valueType: 'option',
          key: 'option',
          render: (text, record, _, action) => [
            <Button
              key="restart"
              type="link"
              onClick={async () => {
                const { code, msg } = await APIS.ClusterApi.rehostCheck({
                  clusterId,
                  hostnames: record.hostname,
                  sshPort: record.sshPort,
                  sshUser: record.sshUser
                })
                if (code === 200) {
                  message.success(msg)
                } else {
                  message.error(msg)
                }
              }}
            >
              重试
            </Button>]
        }
        ]
    return (
        <ProTable
            actionRef={actionRef}
            columns={analysisColumns}
            search={false}
            rowKey="hostname"
            toolbar={{ 
            // 隐藏工具栏设置区
            settings: []
            }}
            dataSource={props.data}
            rowSelection={{
              defaultSelectedRowKeys: []
            }}
            tableAlertRender={({
              selectedRowKeys,
              onCleanSelected,
            }) => {
              currentSelectedRowKeys = selectedRowKeys
              return (
                <Space size={24}>
                  <span>
                    已选 {selectedRowKeys.length} 项
                    <a style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
                      取消选择
                    </a>
                  </span>
                </Space>
              );
            }}
            tableAlertOptionRender={() => {
              return (
                <Space size={16}>
                  <a key="restart" onClick={
                    async () => {
                      const { code, msg } = await APIS.ClusterApi.rehostCheck({ hostnames: currentSelectedRowKeys.join(','), clusterId,   sshPort: props.data[0].sshPort, sshUser: props.data[0].sshUser})
                      if (code === 200) {
                        actionRef.current?.reload()
                      } else {
                        message.error(msg)
                      }
                  }}>
                    全部重试
                  </a>
                </Space>
              );
            }}
      ></ProTable>
    )
}

export default CreateCheckList