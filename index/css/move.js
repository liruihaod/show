











/// /添加一个模板
function Dialog(){};   // 创建空函数
Dialog.prototype={     // 设置函数原型
    defaultOpts:{       //初期设定
        title: '',
        message: '',
        isShowCloseBtn: true,
        isShowConfirmBtn: false,
        onClose: function(){},
        onConfirm: function(){}
    },
    setOpts:function(opts){  // 处理输入参数
        if(typeof opts === 'string'){
            this.opts=$.extend({}, this.defaultOpts, {message:opts});
        }else if(typeof opts === 'object'){
            this.opts=$.extend({}, this.defaultOpts, opts);
        }
    },
    open:function(opts){   // 函数open 打开dialog
        this.setOpts(opts);  // 处理参数 创造html 设置部分按钮有无 绑定事件
        this.createHtml();
        this.setButton();
        this.bindEvent();
    },
    createHtml:function(){   // 根据参数 创建html
        var html='<div class="dialog" style="display:none">'
            +'<div class="dialog-head">'
            +'<h4>'+this.opts.title+'</h4>'
            +'<span class="close">×</span>'
            +'</div>'
            +'<div class="dialog-con">'
            +this.opts.message
            +'</div>'
            +'<div class="dialog-footer">'
            +'<span class="close">取消</span>'
            +'<span class="commit">确定</span>'
            +'</div>'
            +'</div>';
        this.$dialog=$(html);
        $('body').append(this.$dialog);
    },
    setButton:function(){     // 根据参数 设置部分按钮的有无
        var _this=this;
        if(this.opts.isShowCloseBtn){
            _this.$dialog.find('.dialog-head .close').show();
        }else{
            _this.$dialog.find('dialog-head .close').hide();
        };
        if(this.opts.isShowConfirmBtn){
            _this.$dialog.find('.dialog-head .cancel').show();
        }else{
            _this.$dialog.find('dialog-head .cancel').hide();
        };
        if(this.opts.title){
            _this.$dialog.find('.dialog-head').show();
        }else{
            _this.$dialog.find('.dialog-head').hide();
        };
        _this.$dialog.show();
    },
    bindEvent:function(){       // 给按钮绑定事件
        var $dialog=this.$dialog;
        this.drag=false;
        var _this=this;
        $dialog.find('.close').on('click',function(){
            _this.opts.onClose();
            $dialog.hide();
        });
        $dialog.find('.commit').on('click',function(){
            _this.opts.onConfirm();
            $dialog.hide();
        });
    },
}