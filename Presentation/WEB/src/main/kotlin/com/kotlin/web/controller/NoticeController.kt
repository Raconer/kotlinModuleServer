package com.kotlin.web.controller

import com.kotlin.business.service.MainService
import com.kotlin.model.Notice
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.servlet.ModelAndView
import javax.servlet.http.HttpServletRequest

@Controller
class NoticeController{

    @GetMapping("/notice/{templateID}")
    fun notice(model: Model, request: HttpServletRequest, @PathVariable templateID: Int, mav: ModelAndView):String{
        System.out.println("Start home / Get Mapping : " + templateID)
        var cnt:Int = mainService.getListCnt()
        val noticeList: List<Notice> = mainService.getList()

        for(notice in noticeList){
            System.out.println("${notice.toString()}")
        }

        model["cnt"] = cnt
        model["noticeList"] = noticeList
        model["templateID"] = templateID
        model["title"] = "타일즈 코어도 된다"

        return "notice"
    }

    @GetMapping("/notice")
    fun notice(@RequestParam("id") id :Int) : String{
        System.out.println("Notice : $id")
        val path : String = when(id){
            2 -> "/notice/div_N"
            else -> "/notice/table_N" // 원래는 id 가 1일때
        }
        return path
    }

    @Autowired
    lateinit var mainService: MainService




}