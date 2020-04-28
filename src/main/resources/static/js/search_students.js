$(document).ready(function() {


      var studentSerColDefs = [
        { targets :0, width :"8%",orderable : true ,}, //stu_id
        { targets :1, width :"20%",orderable : false , }, //stu_name
        { targets :2, width :"13%",orderable : false , }, //stu_age
        { targets :3, width :"13%",orderable : false , }, //stu_sex
        { targets :4, width :"13%",orderable : false , }, //stu_class
        { targets :5, width :"20%",orderable : false , },// stu_phone
        { targets :6, width :"20%",orderable : false , },// stu_address
        { targets :7, width :"20%",orderable : false , },// stu_qq
        { targets :8, width :"20%",orderable : false , },// stu_comment
        ];

    var studentSerCols = [
      { data :"stu_id" },// stu_id
      { data :"stu_name" },// stu_name
      { data :"stu_age" },// stu_age
      { render: function (data, type, row, meta) {
          var strSex='';
          if(row.stu_sex=="1"){
        	  strSex="man";
          }else{
        	  strSex="women";
          }
            return strSex;
          } },// stu_sex
       { data :"stu_class" },// stu_class
       { data :"stu_phone" },// stu_phone
       { data :"stu_address" },// stu_address
       { data :"stu_qq" },// stu_qq
       { data :"stu_comment" },// stu_comment
      ];

      var student_ser_stting = {
          language : {
            zeroRecords: " ",
            paginate : {
              previous : "Previous",
              next : "Next",
            }
          },
          dom: 'lrtip',
          retrieve : true,
          pageLength : 1,
          destroy : true,
          paging : true,
          lengthChange : false,
          ordering : true,
          info : false,
          autoWidth : true,
          scrollX : true,
          columnDefs : studentSerColDefs,
          columns :studentSerCols,
          order : [ [ 0, "asc" ]],
        };
      var init_stting = $.extend(true,{}, student_ser_stting);
      $('#student_ser_table').DataTable(init_stting);

      //表示更新
      $('#getAllStudent').click(function() {
        var paramsObj = new Object();
      paramsObj.kisyuid="123";
      $("#tableStudentdiv").css("visibility","hidden");
      $("#tableStudentload_div").css("display","block");
          $.ajax({
          type : "post",
          url : contextpath + "/getAllStudents",
          data : JSON.stringify(paramsObj),
          contentType : "application/json; charset=utf-8",
          dataType : "json",
          success : function(obj, ifo) {
            $("#tableStudentload_div").css("display","none");
            $("#tableStudentdiv").css("visibility","visible");
            if (obj.code == "2"){
              showModal("#submit_error_tenpu", obj.result.msg);
            }else{
              $('#student_ser_table').DataTable().clear();
              $('#student_ser_table').DataTable().rows.add(obj.data);
              $('#student_ser_table').DataTable().draw();
            };
          },
          error : function(e) {
            window.location.href = "exception";
          }
        });

      });

});

