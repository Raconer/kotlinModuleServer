package com.kotlin.data.mybatis.repository

import com.kotlin.model.Notice
import org.springframework.stereotype.Repository

@Repository
interface NoticeMapper{
    fun getNoticeListCnt() : Int
    fun getNoticeList() : List<Notice>
}