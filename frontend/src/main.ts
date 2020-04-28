import Saas from '@go-saas/go-saas-ui/src/saas';

// packages
import Router from "@go-saas/go-saas-ui/src/packages/router/basic/router";
import Axios from "@go-saas/go-saas-ui/src/packages/http/axios/axios";
import I18n from "@go-saas/go-saas-ui/src/packages/i18n/basic/i18n";
import LocalStorage from "@go-saas/go-saas-ui/src/packages/storage/local-storage/local-storage";
import Security from "@go-saas/go-saas-ui/src/packages/security/basic/security";

// components
import Master from "@go-saas/go-saas-ui/src/components/master/Master.vue";

// scss
import '@go-saas/go-saas-ui/src/scss/app.scss'

const storage = new LocalStorage();
const router = new Router();
const http = new Axios({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

const saas = new Saas(
    'Go SaaS',
    Master,
    router,
    http,
    new I18n('en'),
    new Security(router, http, storage),
);

saas.init();
saas.run();