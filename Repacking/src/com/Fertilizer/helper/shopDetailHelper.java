package com.Fertilizer.helper;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.Fertilizer.dao.Packing_InfoDao;
import com.Fertilizer.dao.ProductDetailsDao;
import com.Fertilizer.dao.shopDetailsDao;
import com.Fertilizer.hibernate.Packing_InfoBean;
import com.Fertilizer.hibernate.SubCategoryDetailsBean;
import com.Fertilizer.hibernate.TaxCreationBean;
import com.Fertilizer.hibernate.shopDetailsBean;
import com.Fertilizer.utility.HibernateUtility;

public class shopDetailHelper{

	public void shopDetails(HttpServletRequest request,
			HttpServletResponse response) {

		String shopName = request.getParameter("shopName");
	
		shopDetailsBean sdb = new shopDetailsBean();
		sdb.setShopName(shopName);
		
		
		shopDetailsDao sdd = new shopDetailsDao();
		sdd.addShop(sdb);
	
	}

	public Map getShopDetails() {
	      
		int count=1;
		System.out.println("IN HELPER");
		/*String fk_cat_id = request.getParameter("fk_cat_id");
		
		System.out.println("=== == ==="+fk_cat_id);
		
		
		SubCategoryDetailsBean scdb = new SubCategoryDetailsBean();
		
		scdb.setFk_cat_id(Long.parseLong(fk_cat_id));*/
		
		shopDetailsDao sdd = new shopDetailsDao();
		List list=sdd.getShopName();
		
		System.out.println("list ======"+list.size());
		Map  map =  new HashMap();
		for(int i=0;i<list.size();i++)
		{
			System.out.println("IN HELPER");
			Object[] o = (Object[])list.get(i);
			shopDetailsBean bean = new shopDetailsBean();
			System.out.println(Arrays.toString(o));
			bean.setShopId(Long.parseLong(o[0].toString()));
			bean.setShopName(o[1].toString());
			//bean.setTotalAmount((Double)o[1]);
			System.out.println("***************"+o[0]);
			map.put(count,bean);
			count++;
		}
		return map;

	}
	//get shop
public Map editshop(Long containerId) {
		
	 	System.out.println("into helper shop edit");
	 	shopDetailsDao dao1 = new shopDetailsDao();
		List catList = dao1.getshopEdit(containerId);
		
		Map  map =  new HashMap();
		for(int i=0;i<catList.size();i++)
		{
			Object[] o = (Object[])catList.get(i);
			shopDetailsBean bean = new shopDetailsBean();
			 bean.setShopId(Long.parseLong(o[0].toString()));
			 bean.setShopName(o[1].toString());
				
			
			
			map.put(bean.getShopId(),bean);
		}
		System.out.println("out of helper return map : "+map);
		return map;
	
	}
	
	//updateshop
public void updateshop(HttpServletRequest request,HttpServletResponse response) {
	
    String shopid = request.getParameter("shop_id");
    
    String shopname = request.getParameter("shopname");
	System.out.println("helper - shop detail -  "+shopname+" & "+shopid);
	Long shopId = Long.parseLong(shopid);
	
	 HibernateUtility hbu = HibernateUtility.getInstance();
	 Session session = hbu.getHibernateSession();
	 Transaction transaction = session.beginTransaction();

	 shopDetailsBean updatesp = (shopDetailsBean) session.get(shopDetailsBean.class, new Long(shopId));
	 updatesp.setShopName(shopname);
	session.saveOrUpdate(updatesp);
	transaction.commit();
		
}
	//del shop
public void deleteshopname(HttpServletRequest request, HttpServletResponse response ) {
	
		String shopid = request.getParameter("delshopNameid");
	   System.out.println("ContName in helper - "+shopid);
		shopDetailsDao dao = new shopDetailsDao();
		dao.deleteshop(shopid);
		
	}
	
}