var item = $('.menu-item');
var itemSublink= $('.sub-menu a');
var tab= $('.tab');
var section = $('.notice, .pds')

item.attr('tabindex','0');
itemSublink.attr('class','icon-dot-circled');
// 메인 메뉴의 하위 메뉴 제어를 위한 스크립트
item.on('mouseover focusin',function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});


//탭 콘텐츠 제어를 위한 스크립트
// tab.on('click',function(){
//     section.removeClass('board-act');
//     $(this).parent().addClass('board-act');
// });

tab.on('click keyup',function(e){
    e.preventDefault();
    if(e.keyCode === 13 || e.type === 'click'){
        section.removeClass('board-act');
        $(this).parent().addClass('board-act'); 
    }
})

// item.on('focusin',function(){
//     item.removeClass('menu-act');
//     $(this).addClass('menu-act');
// });
 