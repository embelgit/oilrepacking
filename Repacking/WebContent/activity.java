/*package rpa.apis;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.gson.Gson;

import rpa.data.DataHelper;
import rpa.models.Activity;
import rpa.models.ActivityOrder;
import rpa.models.HomePageData;
import rpa.models.UserAccount;

*//**
 * Servlet implementation class activity
 *//*
@WebServlet("/activity")
public class activity extends HttpServlet {
	private static final long serialVersionUID = 1L;
	DataHelper helper = new DataHelper();

	*//**
	 * @see HttpServlet#HttpServlet()
	 *//*
	public activity() {
		super();
		// TODO Auto-generated constructor stub
	}

	*//**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 *//*
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String json ="";
		String name = request.getParameter("ActivityName");	
		String subprocessId = request.getParameter("subprocesId");
		String processid = request.getParameter("processid");
		String processid1 = request.getParameter("processid1");
		String count = request.getParameter("count");
		//System.out.println("count :: "+ count);
		String processName = request.getParameter("processName");
		if(name!=null && name !="") {
			ArrayList<Activity> list = helper.getActivityList(name);
			json = new Gson().toJson(list);
		}else {
			ArrayList<Activity> list = helper.getActivityList(name);
			json = new Gson().toJson(list);
		}
		
		if(subprocessId!=null && subprocessId !="") {
			ArrayList<Activity> list = helper.getActivityList1(subprocessId);
			json = new Gson().toJson(list);
		}
	
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(json);
		out.flush();
	}

	*//**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 *//*
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html"); 
		PrintWriter out = response.getWriter();
		String jsonString = request.getParameter("test");
		try {
			JSONArray jsonArray = new JSONArray(jsonString);
 
			int count = jsonArray.length(); // get totalCount of all jsonObjects
			for(int i=0 ; i< count; i++){   // iterate through jsonArray 
				JSONObject jsonObject = jsonArray.getJSONObject(i);  // get jsonObject @ i position
				ActivityOrder act  = new ActivityOrder();
				ActivityOrder check = helper.validate(jsonObject.getString("ActvityId"));
				
				if(check != null) {
					act.setId(Integer.valueOf(check.getId()));	
					act.setValue(Integer.valueOf(jsonObject.getString("Act")));
					
					HttpSession session = request.getSession(true);
					String ujson =  String.valueOf(session.getAttribute("userinfo"));
					UserAccount account = new Gson().fromJson(ujson, UserAccount.class);
					String userName = String.valueOf(account.getId());
					Date timestamp = new Date();
					SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					act.setDateCreated(parser.format(timestamp));
					act.setCreatedUserName(userName);
					act.setDateUpdated(parser.format(timestamp));
					act.setUpdatedName(userName);
					
					helper.update(act);
				}else{
				//	System.out.println("i am in new");
					act.setActId(Integer.valueOf(jsonObject.getString("ActvityId")));
					act.setActivityName(jsonObject.getString("ActvityName"));				
					act.setValue(Integer.valueOf(jsonObject.getString("Act")));
					act.setProcessId(Integer.valueOf(jsonObject.getString("ProcessId")));
					
					HttpSession session = request.getSession(true);
					String ujson =  String.valueOf(session.getAttribute("userinfo"));
					UserAccount account = new Gson().fromJson(ujson, UserAccount.class);
					String userName = String.valueOf(account.getId());
					Date timestamp = new Date();
					SimpleDateFormat parser = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					act.setDateCreated(parser.format(timestamp));
					act.setCreatedUserName(userName);
					act.setDateUpdated(parser.format(timestamp));
					act.setUpdatedName(userName);
					
					helper.add(act);
				}
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		if (request.getParameter("type") != null) {
			int type = Integer.valueOf(request.getParameter("type"));
			Activity model = new Activity();
			
			if (type == 1) {
				String Name = request.getParameter("Name");
				String Description = request.getParameter("Description");
				String ProcessId =  request.getParameter("ProcessId");
				
				if(!Name.matches("[\\a-zA-Z0-9_!@#$%&*()-+{}:;?,|./ ]*") || Name == null || Name == ""){
					out.println("Function Name Field is Empty ");
				}
				else{if(!Description.matches("[\\a-zA-Z0-9_!@#$%&*()-+{}:;?,|./ ]*") || Description == null || Description == ""){
					out.println("Description Field is Empty ");
				}else{if(!ProcessId.matches("[0-9]*") || ProcessId == null || ProcessId == ""){
					out.println("ProcessId Field is Empty ");
					}else{
						model.setName(request.getParameter("Name"));
						model.setDescription(request.getParameter("Description"));				
						model.setProcessId(Integer.valueOf(request.getParameter("ProcessId")));
						
						helper.add(model);
					}
				  }
				}
				
			} else if (type == 2) {
				String Name = request.getParameter("Name");
				String Description = request.getParameter("Description");
				String ProcessId =  request.getParameter("ProcessId");
				
				if(!Name.matches("[\\a-zA-Z0-9_!@#$%&*()-+{}:;?,|./ ]*") || Name == null || Name == ""){
					out.println("Function Name Field is Empty ");
				}
				else{if(!Description.matches("[\\a-zA-Z0-9_!@#$%&*()-+{}:;?,|./ ]*") || Description == null || Description == ""){
					out.println("Description Field is Empty ");
				}else{if(!ProcessId.matches("[0-9]*") || ProcessId == null || ProcessId == ""){
					out.println("ProcessId Field is Empty ");
					}else{
						model.setId(Integer.valueOf(request.getParameter("id")));
						model.setName(request.getParameter("Name"));
						model.setDescription(request.getParameter("Description"));
						model.setProcessId(Integer.valueOf(request.getParameter("ProcessId")));
						helper.update(model);
					}
				  }
				}
				
			} else if (type == 3) {
				helper.delete(Integer.valueOf(request.getParameter("id")), "Activities");
			}
		}
		doGet(request, response);
	}

}
*/