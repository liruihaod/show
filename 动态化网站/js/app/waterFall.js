//瀑布流
//两个参数，一个容器，一个排序的对象;
define(['jquery'],function($){
function waterFall($ct,$items){
	  this.$ct = $ct;
        this.$items = $items;
       this.heightArr = [];
}
waterFall.prototype= {
        init:function(){
            this.start();
        },
        start:function (){
            var _this = this;
            this.itemWidth = this.$items.outerWidth(true);
            if(this.$items.length ===0) return;
            this.colNum = Math.floor(this.$ct.width()/this.itemWidth);
            this.$ct.width(this.itemWidth * this.colNum);
            this.heightArr = [];
            for(var i=0;i<this.colNum;i++){
                this.heightArr.push(0);
            }
            this.$items.each(function(){
                _this.place(this);
            });
            _this.$ct.height( Math.max.apply(null, _this.heightArr) );
        },
        place:function($el){
            var idx = 0,
                minSumheight = this.heightArr[0];
            for(var i=0;i<this.heightArr.length;i++){
                if(this.heightArr[i]<minSumheight){
                    idx =i;
                    minSumheight = this.heightArr[i];
                }
            }
            $($el).css({
                left:this.itemWidth*idx,
                top:minSumheight
            });
            this.heightArr[idx]+=$($el).outerHeight(true);
        }
    };
        return waterFall;
})