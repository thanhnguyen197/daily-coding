import axios from 'axios';

const CancelToken = axios.CancelToken;

export const services = {
    get: function get (params:any) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;
            const cancelToken = params.cancelToken ? params.cancelToken : new CancelToken(function () {/**/});

            delete params.API_HOST;
            delete params.cancelToken;
            return axios.get(API_HOST + '/' + params.id, {
                params: params,
                cancelToken: cancelToken
            });
        } else {
            return false;
        }
    },
    getList: function getList(params:any) {
        if (typeof params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;
            const cancelToken = params.cancelToken ? params.cancelToken : new CancelToken(function () {/**/});

            delete params.API_HOST;
            delete params.cancelToken;

            return axios.get(API_HOST, {
                params: params,
                cancelToken: cancelToken
            });
        } else {
            return false;
        }
    },
    create: function create(params:any) {
        if (params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.post(API_HOST, params);
        } else {
            return false;
        }
    },
    update: function update(params:any) {
        const {id, API_HOST, ...restOfParams} = params;

        if (typeof API_HOST !== 'undefined' && typeof id !== 'undefined') {

            return axios.put(API_HOST + '/' + id, restOfParams);
        } else {
            return false;
        }
    },
    del: function del(params:any) {
        if (typeof params.API_HOST !== 'undefined' && typeof params.id !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;
            let config = {
                params
            };

            if (typeof params.config !== 'undefined' && Object.keys(params.config).length) {
                const copyConfig = params.config;

                delete params.config;

                config = {
                    params,
                    ...copyConfig
                };
            }

            return axios.delete(API_HOST + '/' + params.id, config);
        } else {
            return false;
        }
    },
    download: function download(params:any) {
        if (typeof params.API_HOST !== 'undefined') {
            const API_HOST = params.API_HOST;

            delete params.API_HOST;

            return axios.get(API_HOST, {
                params: params,
                responseType: 'blob'
            });
        } else {
            return false;
        }
    }
    // upload: function upload(params) {
    //     if (typeof params.API_HOST !== 'undefined') {
    //         const API_HOST = params.API_HOST;

    //         delete params.API_HOST;

    //         const url = API_HOST + '?' + qs.stringify(params.params);

    //         return axios.post(url, params.formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //     } else {
    //         return false;
    //     }
    // }
};