package com.Fertilizer.helper;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.hibernate.Session;

import com.Fertilizer.hibernate.UserDetailsBean;
import com.Fertilizer.utility.HibernateUtility;



/**
 * Servlet implementation class Session
 */
public class LoginController extends HttpServlet {
	
	
	public void loginUser(HttpServletRequest request,HttpServletResponse response) throws IOException{
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		String un = request.getParameter("uname");
		String pwd = request.getParameter("pass");
		HibernateUtility hbu=HibernateUtility.getInstance();
		Session session1=hbu.getHibernateSession();
		org.hibernate.Query query = session1.createQuery("from UserDetailsBean where userName = :username AND password = :pwd ");
		query.setParameter("username", un);
		query.setParameter("pwd", pwd);
		UserDetailsBean uniqueResult = (UserDetailsBean) query.uniqueResult();
		
		String userName = uniqueResult.getUserName();
		String password = uniqueResult.getPassword();
		
		System.out.println(userName);
		
		/*
		 * if(un.equals("") && pwd.equals("")) {
		 * out.println("<font color=red>Either user name or password is wrong.</font>");
		 * }
		 */
		
		if(un.equals(userName) && pwd.equals(password)){
		    
			
			out.print("Welcome, " + un);
			HttpSession session = request.getSession(true); // reuse existing
															// session if exist
		//	 response.sendRedirect("/Repacking/jsp/index.html"); 												// or create one
			 response.sendRedirect("/Repacking/jsp/indexx.jsp");
			  SupplierAccountDetailsHelper help = new SupplierAccountDetailsHelper();
			  help.creditDebitAmount();
			 
			session.setAttribute("user", un);
			 // 30 seconds
			
		} 
		
		/*
		 * else if(un.equals("") && un.equals("")) {
		 * out.println("user name or password is wrong"); }
		 */
		
		else {
		
			response.sendRedirect("/Repacking/jsp/login.jsp"); 
			//RequestDispatcher rd = request.getRequestDispatcher("/SMT/jsp/login.jsp");
			out.println("<font color=red>Either user name or password is wrong.</font>");
		
	      
	}
		
		
	/*	
		
		
		
		query.setParameter("username", un);
		query.setParameter("pwd", pwd);
		UserDetailsBean unique = (UserDetailsBean) query.uniqueResult();
		//System.out.println();
		String userName = unique.getUserName();
		String password = unique.getPassword();
		System.out.println(userName+"User name in login helper");
		System.out.println(password+"password in login helper");
	
		
		
   if(unique != null){
	   
	 
		out.print("Welcome, " + un);
		HttpSession session = request.getSession(true);
		response.sendRedirect("/Fertilizer/jsp/index.jsp");
		session.setAttribute("user", un);
		HttpSession session = request.getSession(true); // reuse existing
		response.sendRedirect("/Fertilizer/jsp/index.jsp");												// or create one
		session.setAttribute("user", un);*
		 // 30 seconds
		}
	else{
		
		
		    response.sendRedirect("/Fertilizer/jsp/login.jsp");
	}*/
 }

	public void language(HttpServletRequest request,
			HttpServletResponse response) {
		// TODO Auto-generated method stub
		
		String lan = request.getParameter("language");
		HttpSession session = request.getSession(true); // reuse existing
		// session if exist
											// or create one
        session.setAttribute("lan", lan);
	}
	
	
}