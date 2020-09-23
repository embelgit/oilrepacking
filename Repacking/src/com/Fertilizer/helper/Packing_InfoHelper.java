package com.Fertilizer.helper;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.bean.GetCreditCustomerDetails;
import com.Fertilizer.bean.GetProductDetailPO;
import com.Fertilizer.bean.GetProductDetails;
import com.Fertilizer.dao.CustomerDetailsDao;
import com.Fertilizer.dao.Packing_InfoDao;
import com.Fertilizer.dao.ProductDetailsDao;
import com.Fertilizer.hibernate.CustomerDetailsBean;
import com.Fertilizer.hibernate.Packing_InfoBean;
import com.Fertilizer.hibernate.SupplierDetailsBean;
import com.Fertilizer.utility.HibernateUtility;

public class Packing_InfoHelper {
	BigInteger containerId;
	
	public void PackTypeDetails(HttpServletRequest request,
			HttpServletResponse response) {
			
		String unitname = request.getParameter("unitname");
		String packing_Type = request.getParameter("packing_Type");
		String containerName = request.getParameter("containerName");
		String unitId = request.getParameter("unitId");
		String extrapacking = request.getParameter("extrapacking");
		System.out.println("In Helper" + packing_Type);
	
		Packing_InfoBean pib = new Packing_InfoBean();
		
		pib.setPacking_Type(packing_Type);
		pib.setContainerName(containerName);
		pib.setUnit_Id(Long.parseLong(unitId));
		pib.setExtraPacking(extrapacking);
		pib.setUnitName(unitname);
		/*cdb.setSubCategoryName(subCategoryName);*/
		System.out.println("extra packing set - "+pib.getExtraPacking());
		Packing_InfoDao pid = new Packing_InfoDao();
		pid.addpacking_Type(pib);
	}
	//// edit container of conatainer details
	public Map editContainerInformation(Long containerId) {
		
	 	System.out.println("into helper class by kishor");
	 	Packing_InfoDao dao1 = new Packing_InfoDao();
		List catList = dao1.getContainerEdit(containerId);
		
		Map  map =  new HashMap();
		for(int i=0;i<catList.size();i++)
		{
			Object[] o = (Object[])catList.get(i);
			Packing_InfoBean bean = new Packing_InfoBean();
			 bean.setContainerName(o[0].toString());
			 bean.setPacking_Type(o[1].toString());
	//		 bean.setExtraPacking(o[2].toString());
			 bean.setUnitName(o[2].toString());
	
				
			
			
			map.put(bean.getContainerName(),bean);
		}
		System.out.println("out of helper return map : "+map);
		return map;
	
	}
	//delete cont
	public void deleteCont(HttpServletRequest request, HttpServletResponse response ) {
		
		String ContName = request.getParameter("delContName");
		   System.out.println("ContName in helper - "+ContName);
			Packing_InfoDao dao = new Packing_InfoDao();
			dao.deletCont(ContName);
			
		}
	
	
	public Map getContainerName() {

		int count = 1;
		Packing_InfoDao dao = new Packing_InfoDao();
		List list= dao.getContainerName();
		
		Map  map =  new HashMap();
		for(int i=0;i<list.size();i++)
		{
			Object[] o = (Object[])list.get(i);
			Packing_InfoBean bean = new Packing_InfoBean();
			System.out.println("result to fetch container grid  - "+Arrays.toString(o));
			bean.setPacking_Id(Long.parseLong(o[0].toString()));;
			bean.setPacking_Type(o[1].toString());
			bean.setContainerName((o[2].toString()));
			bean.setExtraPacking((o[3].toString()));
			bean.setUnitName((o[4].toString()));
			System.out.println("unitname - "+bean.getUnitName());
			
			//bean.setTotalAmount((Double)o[1]);
			System.out.println("***************"+o[0]);
			map.put(count,bean);
			count++;
		}
		return map;

	}
	
public Map getproductDetailInGridForContainer(String containerName, String capacity) {
		
		Packing_InfoDao dao = new Packing_InfoDao();
		List list = dao.getproductDetailInGridForContainer(containerName,capacity);
		System.out.println(list.size());
		Map  map1 =  new HashMap();
		
		for(int i=0;i<list.size();i++)
		{
			Object[] o = (Object[])list.get(i);
			Packing_InfoBean bean = new Packing_InfoBean();
			
			
			bean.setPacking_Id(Long.parseLong(o[0].toString()));
			bean.setContainerName((o[2].toString()));
			bean.setPacking_Type((o[1].toString()));
			bean.setExtraPacking((o[3].toString()));
			bean.setUnitName(o[4].toString());
		
			map1.put(bean.getPacking_Id(),bean);
		}
		return map1;
		
	}






public void editUpdatePackingTypeInfo(HttpServletRequest request, HttpServletResponse response) {
	// TODO Auto-generated method stub
	
	
			
			String packing_Type = request.getParameter("packing_Type");
			String containerName = request.getParameter("containerName");
			String packingId = request.getParameter("packing_Id");
			System.out.println("hi this is kishor*****++++++++++++"+packingId);
			String extrapacking = request.getParameter("extrapacking");
			String unitname =request.getParameter("unitname");
			System.out.println("In Helper" + packing_Type);

	
	
	
	
			HibernateUtility hbu=null;
			Session session = null;
			Transaction transaction = null;
			
			 hbu = HibernateUtility.getInstance();
			session = hbu.getHibernateSession();
			 transaction = session.beginTransaction();
			 
	 

		/*//long customerId = Long.parseLong(customerId);
		long supplierID =Long.parseLong(supplierId);
		Packing_InfoBean det = (Packing_InfoBean) session.get(Packing_InfoBean.class, supplierID);
		*/
	 
			 Packing_InfoBean pib = new Packing_InfoBean();
			
			pib.setPacking_Type(packing_Type);
			pib.setContainerName(containerName);
			pib.setPacking_Id(Long.parseLong(packingId));
			pib.setExtraPacking(extrapacking);
			pib.setUnitName(unitname);
			
	
			session.saveOrUpdate(pib);
			transaction.commit();
			
			System.out.println("Record updated successfully.");
		
	
	
}

// edit Container by kishor
public void editContainerInformation(HttpServletRequest request,
		HttpServletResponse response) {

	System.out.println("in Container in  helper by kishor 2222222+++++++++++++++++++++++++++++++++++++");
	
	String strContainerId = request.getParameter("pk_type_id");
	System.out.println("hi this is kishor id ++++++++++++++++"+strContainerId);
	
	String containerName = request.getParameter("containerName");
	System.out.println("hi this is kishor -----------"+containerName);
	
	String packing_Type = request.getParameter("packing_Type");
	System.out.println("hi this is kishor ----------========"+packing_Type);
	
	String unitName = request.getParameter("unitName");
	System.out.println("hi this is kishor //////////////"+unitName);
	
	
	String extrapacking = request.getParameter("extrapacking");
	System.out.println("hi this is kishor ***************"+extrapacking);
	
	
	
	HibernateUtility hbu=null;
	Session session = null;
	Transaction transaction = null;
	
	 hbu = HibernateUtility.getInstance();
	session = hbu.getHibernateSession();
	 transaction = session.beginTransaction();

	//long customerId = Long.parseLong(customerId);
	long containerId =Long.parseLong(strContainerId);
	//(BigInteger) object[4])
	Packing_InfoBean det = (Packing_InfoBean) session.get(Packing_InfoBean.class, containerId);
	
	det.setContainerName(containerName);
	det.setPacking_Type(packing_Type);
	det.setUnitName(unitName);
	
	det.setExtraPacking(extrapacking);
	
    session.saveOrUpdate(det);
	transaction.commit();
	
	System.out.println("Record updated successfully.");


}




}
