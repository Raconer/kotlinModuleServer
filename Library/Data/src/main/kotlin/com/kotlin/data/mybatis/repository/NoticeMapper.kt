package com.kotlin.data.mybatis.repository

import org.springframework.stereotype.Repository

@Repository
interface NoticeMapper{
    fun getNoticeListCnt() : Int
}