package com.kotlin.business.Service

import com.kotlin.data.mybatis.repository.NoticeMapper
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class MainService{

    @Autowired
    lateinit var noticeMapper: NoticeMapper

    fun getListCnt():Int {
        return noticeMapper.getNoticeListCnt()
    }

}