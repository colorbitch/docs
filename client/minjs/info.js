/*! doc 2014-07-09 */
!function(){var a={$allDocs:$("#all-docs"),_init:function(){var a=this;$.docsajax({url:"/fetch/user/docs",data:{owner:$(".account-info p").text()},wrap:a.$allDocs,success:function(b){a.$allDocs.html(a.docHtml(b.docs))}})},docHtml:function(a){return $.map(a,function(a){var b=$("<li>"),c='<a href="/doc/'+a.user+"/"+a.title+'">'+a.title+"</a>";return b.html(c).data("doc",a)})},bindEvent:function(){var a=$(".item-list"),b=$(".slide-tabs li"),c=this;$(".slide-tabs").on("click","li",function(){var d=$(this).index();$(this).hasClass("active")||(a.addClass("hidden").eq(d).removeClass("hidden"),b.removeClass("active").eq(d).addClass("active"),c.state.nowTab=a.eq(d),c.state.showDetail(!1))})},init:function(){this._init(),this.bindEvent()}};a.init()}();