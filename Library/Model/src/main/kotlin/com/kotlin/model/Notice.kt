package com.kotlin.model

import java.util.*

class Notice(){

    var id : Int = 0
        get() = field
        set(value) {field = value}
    var title : String = ""
        get() = field
        set (value) {field = value}
    var content : String = ""
        get() = field
        set (value) { field = value}
    var creDate : Date? = null
        get() = field
        set (value) {
            if(value === null) field =  Date()
            else field = value
        }

    override fun toString(): String {
        return "{ id : $id, title : $title, content : $content, creDate : $creDate }"
    }
}