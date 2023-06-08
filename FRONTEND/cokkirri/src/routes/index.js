import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index.js'
// 연결된 페이지들
import Home from './Home.vue'
import SignUpPage from './SignUpPage.vue'

import MyPage from './mypage/MyPage.vue'
import MyProfile from './mypage/Profile.vue'
import MyTimeTable from './mypage/TimeTable.vue'
import MyMatching from './mypage/Matching.vue'
import Report from './mypage/component/Report.vue'

import MatchingStartPage from './matchingpage/MatchingStartPage.vue'

import AdminHome from './adminpage/AdminHome.vue'

import Payments from './Payments.vue'
import Starting from './Starting.vue'

import ChatRoom from './ChatRoom.vue'
import paypay from './paypay.vue'

const router = createRouter({
    // Hash 모드로 설정
    history: createWebHashHistory(),
    // 연결된 페이지들
    routes: [
        {
            path: '',
            component: Home,
            meta:{
                isLoginPage: true
            }
        },
        {
            path: '/signup',
            component: SignUpPage
        },

        {
            path: '/my',
            component: MyPage, 
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/my/profile',
            component: MyProfile, 
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/my/timetable',
            component: MyTimeTable, 
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/my/matching',
            component: MyMatching, 
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/my/matching/report',
            component: Report
        },

        {
            path: '/matchingstart',
            component: MatchingStartPage, 
            meta:{
                requiresAuth: true
            }
        },
        
        {
            path: '/admin',
            component: AdminHome
        },

        {
            path: '/Payments',
            component: Payments, 
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/Starting',
            component: Starting, 
            meta:{
                requiresAuth: true
            }
        }
        ,{
            path: '/ChatRoom',
            component: ChatRoom, 
            meta:{
                requiresAuth: true
            }
        }
        ,{
            path: '/paypay',
            component: paypay
        }
    ]
})
router.beforeEach((to,from,next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isLoginPage = to.matched.some(record => record.meta.isLoginPage);
    const isLoggedIn = store.state.isLogin;
    if(requiresAuth && !isLoggedIn){
        alert("로그인이 필요합니다.")
        next('/');
    }else if(isLoginPage && isLoggedIn){
        alert("이미 로그인 상태입니다.")
        next('/Starting');
    }else{
        next();
    }
})

export default router;