<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<% boolean isHome=false;%>
<%@include file="commons/header.jsp"%>
<head>
<meta charset="ISO-8859-1">

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Comoatible" content="IE=edge">
  <title>Admin | Home </title>
  <link rel="stylesheet" type="text/css" href="/Repacking/staticContent/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href=" /Repacking/staticContent/css/style.css">
  <link rel="stylesheet" type="text/css" href="/Repacking/staticContent/css/fonts.css">
</head>
<body>

  <div class="container-fluid display-table">
    <div class="row display-table-row">
      <!-- Side menu -->
      <div class="col-md-2 col-sm-1 hidden-xs display-table-cell valign-top border-bottom" id="side-menu">
          <h1 class="hidden-xs hidden-sm">Admin</h1>
          <ul>
            <li class="link">
              <a href="/Repacking/jsp/allBilling.jsp">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                <span class="hidden-sm hidden-xs"> Home	</span>
              </a>
              </li>
            <li class="link active">
              <a href="index.html">
                <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
                <span class="hidden-sm hidden-xs"> Dashboard</span>
              </a>
            </li>

             <li class="link"> 
                <a href="purchaseReports.jsp" >
                  <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                  <span class="hidden-sm hidden-xs">Purchase Reports</span>
                  <span class="label label-success pull-right hidden-sm hidden-xs"></span>
                </a>
                <ul id="collapse-post" class="collapse collapseable">
                  <li>
                    <a href="reports.html">
                      Report 1                      
                    </a>
                  </li>
                  <li>
                    <a href="reports.html">
                      Report 2                      
                    </a>
                  </li>
                  <li>
                    <a href="reports.html">
                      Report 3                       
                    </a>
                  </li>
                  <li>
                    <a href="reports.html">
                       Report 4                       
                    </a>
                  </li>
                </ul>
            </li>
              
          <li class="link">
                <a href="saleReports.jsp" >
                  <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                  <span class="hidden-sm hidden-xs">Sales Reports</span>
                  <span class="label label-success pull-right hidden-sm hidden-xs"></span>
                </a>
                <ul id="collapse-sales" class="collapse collapseable">
                  <li>
                    <a href="reports.html">
                      Report 1                      
                    </a>
                  </li>
                  <li>
                    <a href="reports.html">
                      Report 2                      
                    </a>
                  </li>
                  <li>
                    <a href="reports.html">
                      Report 3                       
                    </a>
                  </li>
                  <li>
                    <a href="reports.html">
                       Report 4                       
                    </a>
                  </li>
                </ul>
            </li>
              
          </ul>
      </div>
      <!-- main content -->
      <div class="col-md-10 col-sm-11 display-table-cell valign-top box">
        <div class="row">
          <header id="nav-header" class="clearfix">
             <div class="col-md-5">
              <nav class="navbar-default pull-left">
                <button type="button" class="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu">
                  <span class="sr-only">Toggle Navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </nav> 
               <h4 id="main-head" class="col-md-12" style="font-family: "ubantu;"><span class="sub-head"><i>Created By</i></span> <strong>EMBEL TECHNOLOGIES PVT LTD</strong></h4>
             </div>
             <div class="col-md-7">
               <ul class="pull-right">
                 <li id="welcome" class="hidden-xs">  
                  <input type="text" class="hidden-sm hidden-xs" id="header-feild-search"placeholder="search for something">
                 </li>
                <!--  <li class="fixed-width">
                    <a href="#" ><span class="glyphicon glyphicon-envelope area-hidden="true"></span>
                    <span class="label label-message">3</span>
                    </a>
                  </li> -->
                 <li ><a href="/Repacking/jsp/login.jsp" class="logout"><span class="glyphicon glyphicon-log-out" area-hidden="true"></span></a>LogOut</li>
               </ul>
             </div>
          </header> 
        </div>
        

        <div class="col-md-8">
          <div class="row">
            <section id="stats" class="clearfix">
              <div class="tab panel-header">
                <button class="tablinks active" onclick="openCity(event, 'Graph')">Graph</button>
                <button class="tablinks" href="#myChart1"onclick="openCity(event, 'Pie-Chart')">Bar-Graph</button>
              </div>
                    
              <div class="panel-content">

              <div id="Graph" class="tabcontent">
               <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
              </div>

              <div id="Pie-Chart" class="tabcontent">
               
<div id="container1" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto"></div>
              </div>
            </section>

          </div>
        </div>
        <div class="col-md-4">
          <div class="row clearfix">
            <div class="panel list-search">
              <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

                <ul id="myUL" class="clearfix">
                  <li><a href="#">Adele</a></li>
                  <li><a href="#">Agnes</a></li>

                  <li><a href="#">Billy</a></li>
                  <li><a href="#">Bob</a></li>

                  <li><a href="#">Calvin</a></li>
                  <li><a href="#">Christina</a></li>
                  <li><a href="#">Cindy</a></li>
                  <li><a href="#">Cavin</a></li>
                </ul>
            </div>
          </div>
        </div>    
        <div class="col-md-6 ">
          <div class="row clearfix">
            <aside id="daily-stats">
              <div class="panel panel-left">
                <div class="panel-heading">
                  <h4 class="panel-title">Today's Sale</h4>
                </div>
                <div class="panel-body">
                   <span class="glyphicon glyphicon-stats"></span>
                  <span><strong id="sales" data-max="10000"></strong></span>
                </div>
              </div>
            </aside> 
          </div>  
        </div>
         <div class="col-md-6 ">
          <div class="row clearfix">
            <aside id="daily-stats">
              <div class="panel panel-right">
                <div class="panel-heading">
                  <h4 class="panel-title">Today's Purchase</h4>
                </div>
                <div class="panel-body">
                   <span class="glyphicon glyphicon-stats"></span>
                  <span><strong id="purchase" data-max="14400"></strong></span>
                </div>
              </div>
            </aside> 
          </div>  
        </div>
        
          <div class="col-md-6">
                        <div class="card ">
                            <div class="header">
                                <h4 class="title">Tasks</h4>
                                <p class="category">Backend development</p>
                            </div>
                            <div class="content">
                                <div class="table-full-width">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>
                          <div class="checkbox">
                                <input id="checkbox1" type="checkbox">
                                <label for="checkbox1"></label>
                              </div>
                                                </td>
                                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                          <div class="checkbox">
                                <input id="checkbox2" type="checkbox" checked>
                                <label for="checkbox2"></label>
                              </div>
                                                </td>
                                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                          <div class="checkbox">
                                <input id="checkbox3" type="checkbox">
                                <label for="checkbox3"></label>
                              </div>
                                                </td>
                                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                        </td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                          <div class="checkbox">
                                <input id="checkbox4" type="checkbox" checked>
                                <label for="checkbox4"></label>
                              </div>
                                                </td>
                                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                          <div class="checkbox">
                                <input id="checkbox5" type="checkbox">
                                <label for="checkbox5"></label>
                              </div>
                                                </td>
                                                <td>Read "Following makes Medium better"</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                          <div class="checkbox">
                                <input id="checkbox6" type="checkbox" checked>
                                <label for="checkbox6"></label>
                              </div>
                                                </td>
                                                <td>Unfollow 5 enemies from twitter</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" title="Edit Task" class="btn btn-info btn-simple btn-xs">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-simple btn-xs">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="footer">
                                    <hr>
                                    <div class="stats">
                                        <i class="fa fa-history"></i> Updated 3 minutes ago
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <div class="row">
             <footer id="admin-footer" class="clearfix col-md-12">
                <div class="pull-left"><b>copyright</b> &copy; 2017 </div>
                <div class="pull-right"> Admin system</div>
              </footer>
            
            </div>
      </div>  
    </div>
  </div>



  <script src="/Repacking/staticContent/js/jquery.js"></script>
  <script src="/Repacking/staticContent/js/bootstrap.js"></script>

  <script src="/Repacking/staticContent/js/default.js"></script>
  <script src="/Repacking/staticContent/js/charts.js"></script>
  
<script src="/Repacking/staticContent/js/exporting.js"></script>
  <script>
function openCity(evt, statsType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(statsType).style.display = "block";
    evt.currentTarget.className += " active";
}
</script>

<script type="text/javascript">
  var $length1 = $('#sales');
  var lengthMax1 = parseInt($length1.attr('data-max'), 10);
  var current1 = 0;

 var updateLength1 = function() {
  current1 += 100;
  $length1.html(current1 );
  updateTick1();
 };

 var updateTick1 = function(){
  if (current1 < lengthMax1){
   requestAnimationFrame(updateLength1);
  } 
  else{
    $length1.html('<i class="fa">&#xf156;</i>' +lengthMax1)
  }
 };

 updateLength1();

</script>

<script type="text/javascript">

  var $length = $('#purchase');
  var lengthMax = parseInt($length.attr('data-max'), 10);
  var current = 0;

 var updateLength = function() {
  current += 100;
  $length.html(current );
  updateTick();
 };

 var updateTick = function(){
  if (current < lengthMax){
   requestAnimationFrame(updateLength);
  } 
  else{
    $length.html('<i class="fa">&#xf156;</i>' +lengthMax)
  }
 };

 updateLength();

</script>
<script type="text/javascript">
 Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Sales , Purchase and Expences'
    },
    subtitle: {
        text: 'Source: <a href="https://http://www.embel.co.in">EMBEL TECHNOLOGIES</a>'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Figures (In Lakhs)'
        },
        labels: {
            formatter: function () {
                return this.value / 500 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 2015,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Year 2015',
        data: [133, 156, 947, ]
    }, {
        name: 'Year 2016 ',
        data: [1052, 954, 4250,]
    },
     {
        name: 'Year 2017',
        data: [152, 1954, 450, ]
    },]
});
</script>
<script type="text/javascript">
  // Build the chart
Highcharts.chart('container1', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Sales , Purchase and Expences'
    },
    subtitle: {
        text: 'Source: <a href="https://http://www.embel.co.in">EMBEL TECHNOLOGIES</a>'
    },
    xAxis: {
        categories: ['Year 2015 ', 'Year 2016', 'Year 2017 ',],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Sales (In Lakhs)',
            align: 'high'
        },
        labels: {
            overflow: 'justify' 
        }

    },
    tooltip: {
        valueSuffix: ' Lakhs'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [ {
        name: 'Year 2015',
        data: [133, 156, 947, ]
    }, {
        name: 'Year 2016',
        data: [1052, 954, 4250, ]
    },
    {
        name: 'Year 2017',
        data: [152, 1954, 450, ]
    },]
});
</script>

<script>
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}
</script>

</body>
</html>