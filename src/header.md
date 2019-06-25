<script type="text/javascript">
	$(document).ready(function() {
	  //为超链接加上target='_blank'属性
		$('a[href^="http"]').each(function() {
			$(this).attr('target', '_blank');
		});
		
		// 记住每一次表单提交的数据并保存
		function fillAndListenForm() {
      // 保存表单数据
      function saveForm($item) {
        var params = {};
        $item.parents('form').find('.control-label').each(function(j, label) {
          var $label = $(label);
          var key = $.trim($label.text());
          if (!key) return;
          params[key] = $label.next().find('input').val(); 
        });
        
        var api = $item._jl_api;
        localStorage.setItem('rf-' + api, JSON.stringify(params));
      }
      
      // 读取数据，填入表单
      function writeForm($item) {
        var api = $item._jl_api;
        var params = localStorage.getItem('rf-' + api);
        if (!params) return;
        params = JSON.parse(params);
        
        $item.parents('form').find('.control-label').each(function(j, label) {
          var $label = $(label);
          var key = $.trim($label.text());
          if (!key || !params[key]) return;
          
          $label.next().find('input').val(params[key]); 
        });
      }
      
      // 遍历每一个提交按钮
      $('.sample-request-send').each(function(index, item){
        var $item = $(item);
        $item._jl_api = $item.parents('article').attr('id');
        
        // 监听提交按钮点击，保存表单数据
        $item.on('click', function() {
          saveForm($item);
        });
        
        writeForm($item);
      });
    }
    
    // 查询页面是否渲染完成
    function queryPageReady() {
      if ($('#sections section').length === 0) {
        setTimeout(queryPageReady, 100)
      } else {
        fillAndListenForm();
      }
    }
    
    queryPageReady();
	});
</script>

修订历史
--
| 版本号 |  开始日期 | 最新修订时间 | 开发内容 | 备注 |
| --- | :---: | :---: | :---: | :---: | 
| 0.0.1 | 2019年 6月10日 星期一 14时52分15秒 | 2019年 6月14日 星期五 14时29分22秒 | -/- |
