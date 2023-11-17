import ajax, { AjaxPromise } from '@ajax';
export class ClusterApi {
    protected $basePath = ''.replace(/\/$/, '');

    public constructor(basePath?: string) {
      if (basePath !== undefined) {
        this.$basePath = basePath.replace(/\/$/, '');
      }
    }

    public frameList (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/api/frame/list`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public frameServiceList (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/api/frame/service/list`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public frameDelete (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `api/frame/service/delete/${data.id}`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'GET',
            url,
            ...p
        })
    }

    public saveClusterManager (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/api/cluster/user/saveClusterManager`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public clusterSave (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `api/cluster/save`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public clusterUpdate (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `api/cluster/update`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public clusterDelete (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `api/cluster/delete`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public clusterServiceList (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/cluster/service/instance/list`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alarmGroupSave (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/alert/group/save`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alarmGroupDelete (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/alert/group/delete`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alarmGroupList (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/alert/group/list`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public getServiceRoleByServiceName (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/api/frame/service/role/getServiceRoleByServiceName`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alertQuotaSave (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/cluster/alert/quota/save`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alertQuotaUpdate (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/cluster/alert/quota/update`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alertQuotaDelete (data?:any, opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/cluster/alert/quota/delete`;
        const p: any = {};
        p.data = data;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alertQuotaStart (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/cluster/alert/quota/start`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

    public alertQuotaStop (form?:any , opt?:any): AjaxPromise<string>  {
        const url = this.$basePath + `/cluster/alert/quota/stop`;
        const p: any = {};
        p.form = form;
        return ajax.ajax({
            ...opt,
            method: 'POST',
            url,
            ...p
        })
    }

}

export default new ClusterApi()