package com.kotlin.business.service

import com.kotlin.data.mybatis.repository.NoticeMapper
import com.kotlin.model.Notice
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class MainService{

    @Autowired
    lateinit var noticeMapper: NoticeMapper

    fun getListCnt():Int {
        return noticeMapper.getNoticeListCnt()
    }

    fun getList(): List<Notice> {
        return noticeMapper.getNoticeList()
    }

}