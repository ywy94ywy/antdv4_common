import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: props =>
      React.createElement(
        require('C:/Users/Admin/Desktop/ant4/node_modules/umi-plugin-father-doc/lib/themes/default/layout.js')
          .default,
        {
          ...{
            menus: [
              {
                items: [
                  {
                    title: '首页',
                    path: '/',
                    meta: { order: 99 },
                    children: [
                      {
                        path: '/index',
                        title: '介绍',
                        meta: {
                          group: { path: '/', title: '首页', order: 99 },
                          title: '介绍',
                          slugs: [],
                        },
                      },
                    ],
                  },
                  {
                    title: 'hooks',
                    path: '/demo/use-unfold',
                    meta: {},
                    children: [
                      {
                        path: '/demo/use-unfold/index',
                        title: '折叠工具',
                        meta: {
                          group: { path: '/demo/use-unfold', title: 'hooks' },
                          title: '折叠工具',
                          slugs: [],
                        },
                      },
                    ],
                  },
                  {
                    title: '布局',
                    path: '/demo/layouts',
                    meta: {},
                    children: [
                      {
                        path: '/demo/layouts/index',
                        title: '特色布局',
                        meta: {
                          group: { path: '/demo/layouts', title: '布局' },
                          title: '特色布局',
                          slugs: [
                            {
                              depth: 2,
                              value: '普通布局',
                              heading: '普通布局',
                            },
                            {
                              depth: 2,
                              value: '综合运用',
                              heading: '综合运用',
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    title: '组件',
                    path: '/components',
                    meta: {},
                    children: [
                      {
                        path: '/components/card',
                        title: 'Card',
                        meta: {
                          group: { path: '/components', title: '组件' },
                          title: 'Card',
                          slugs: [
                            {
                              depth: 2,
                              value: '便捷的margin',
                              heading: '便捷的margin',
                            },
                          ],
                        },
                      },
                      {
                        path: '/components/form',
                        title: 'Form',
                        meta: {
                          group: { path: '/components', title: '组件' },
                          title: 'Form',
                          slugs: [
                            {
                              depth: 2,
                              value: '多列表单(任意列数)',
                              heading: '多列表单任意列数',
                            },
                            {
                              depth: 2,
                              value: '多列表单(带间距)',
                              heading: '多列表单带间距',
                            },
                            {
                              depth: 2,
                              value: '占位与跨行',
                              heading: '占位与跨行',
                            },
                            {
                              depth: 2,
                              value: '综合应用',
                              heading: '综合应用',
                            },
                          ],
                        },
                      },
                      {
                        path: '/components/index',
                        title: 'Table',
                        meta: {
                          group: { path: '/components', title: '组件' },
                          title: 'Table',
                          slugs: [
                            {
                              depth: 2,
                              value: 'header左右',
                              heading: 'header左右',
                            },
                          ],
                        },
                      },
                      {
                        path: '/components/tree',
                        title: 'Tree',
                        meta: {
                          group: { path: '/components', title: '组件' },
                          title: 'Tree',
                          slugs: [
                            {
                              depth: 2,
                              value: '定制Tree（showline fixed，右键菜单）',
                              heading: '定制tree（showline-fixed，右键菜单）',
                            },
                            {
                              depth: 2,
                              value: 'SearchTree',
                              heading: 'searchtree',
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            title: 'lanlinker',
          },
          ...props,
        },
      ),
    routes: [
      {
        path: '/index',
        component: require('../demo/index.md').default,
        exact: true,
        meta: {
          group: {
            path: '/',
            title: '首页',
            order: 99,
          },
          title: '介绍',
          slugs: [],
        },
        title: '介绍',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - 介绍',
        _title_default: 'lanlinker',
      },
      {
        path: '/components/card',
        component: require('../demo/Card/card.md').default,
        exact: true,
        meta: {
          group: {
            path: '/components',
            title: '组件',
          },
          title: 'Card',
          slugs: [
            {
              depth: 2,
              value: '便捷的margin',
              heading: '便捷的margin',
            },
          ],
        },
        title: 'Card',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - Card',
        _title_default: 'lanlinker',
      },
      {
        path: '/components/form',
        component: require('../demo/Form/form.md').default,
        exact: true,
        meta: {
          group: {
            path: '/components',
            title: '组件',
          },
          title: 'Form',
          slugs: [
            {
              depth: 2,
              value: '多列表单(任意列数)',
              heading: '多列表单任意列数',
            },
            {
              depth: 2,
              value: '多列表单(带间距)',
              heading: '多列表单带间距',
            },
            {
              depth: 2,
              value: '占位与跨行',
              heading: '占位与跨行',
            },
            {
              depth: 2,
              value: '综合应用',
              heading: '综合应用',
            },
          ],
        },
        title: 'Form',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - Form',
        _title_default: 'lanlinker',
      },
      {
        path: '/demo/layouts/index',
        component: require('../demo/Layouts/index.md').default,
        exact: true,
        meta: {
          group: {
            path: '/demo/layouts',
            title: '布局',
          },
          title: '特色布局',
          slugs: [
            {
              depth: 2,
              value: '普通布局',
              heading: '普通布局',
            },
            {
              depth: 2,
              value: '综合运用',
              heading: '综合运用',
            },
          ],
        },
        title: '特色布局',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - 特色布局',
        _title_default: 'lanlinker',
      },
      {
        path: '/components/index',
        component: require('../demo/Table/index.md').default,
        exact: true,
        meta: {
          group: {
            path: '/components',
            title: '组件',
          },
          title: 'Table',
          slugs: [
            {
              depth: 2,
              value: 'header左右',
              heading: 'header左右',
            },
          ],
        },
        title: 'Table',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - Table',
        _title_default: 'lanlinker',
      },
      {
        path: '/components/tree',
        component: require('../demo/Tree/tree.md').default,
        exact: true,
        meta: {
          group: {
            path: '/components',
            title: '组件',
          },
          title: 'Tree',
          slugs: [
            {
              depth: 2,
              value: '定制Tree（showline fixed，右键菜单）',
              heading: '定制tree（showline-fixed，右键菜单）',
            },
            {
              depth: 2,
              value: 'SearchTree',
              heading: 'searchtree',
            },
          ],
        },
        title: 'Tree',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - Tree',
        _title_default: 'lanlinker',
      },
      {
        path: '/demo/use-unfold/index',
        component: require('../demo/useUnfold/index.md').default,
        exact: true,
        meta: {
          group: {
            path: '/demo/use-unfold',
            title: 'hooks',
          },
          title: '折叠工具',
          slugs: [],
        },
        title: '折叠工具',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'lanlinker - 折叠工具',
        _title_default: 'lanlinker',
      },
      {
        path: '/',
        meta: {
          order: 99,
        },
        exact: true,
        redirect: '/index',
        _title: 'lanlinker',
        _title_default: 'lanlinker',
      },
      {
        path: '/components',
        meta: {},
        exact: true,
        redirect: '/components/card',
        _title: 'lanlinker',
        _title_default: 'lanlinker',
      },
      {
        path: '/demo/layouts',
        meta: {},
        exact: true,
        redirect: '/demo/layouts/index',
        _title: 'lanlinker',
        _title_default: 'lanlinker',
      },
      {
        path: '/demo/use-unfold',
        meta: {},
        exact: true,
        redirect: '/demo/use-unfold/index',
        _title: 'lanlinker',
        _title_default: 'lanlinker',
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Admin/Desktop/ant4/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src', hasRoutesInConfig: false },
          ),
        _title: 'lanlinker',
        _title_default: 'lanlinker',
      },
    ],
    title: 'lanlinker',
    _title: 'lanlinker',
    _title_default: 'lanlinker',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
