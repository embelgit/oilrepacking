package com.Fertilizer.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.bean.GetProductDetails;
import com.Fertilizer.hibernate.CustomerDetailsBean;
import com.Fertilizer.hibernate.Packing_InfoBean;
import com.Fertilizer.utility.HibernateUtility;


public class Packing_InfoDao {
	
	public void addpacking_Type(Packing_InfoBean pib) {
		
		System.out.println("In DAO");
		//MiddlegenTask
		HibernateUtility hbu=null;
		Session session = null;
		Transaction transaction = null;
		try{
		 hbu = HibernateUtility.getInstance();
		session = hbu.getHibernateSession();
		 transaction = session.beginTransaction();
	
		 System.out.println("Tx started");
		session.save(pib);
		System.out.println("obj saved Successful1");
		transaction.commit();
		System.out.println("tx commit Successful");
		}
		catch(RuntimeException e){
			try{
				transaction.rollback();
			}catch(RuntimeException rbe)
			{
				Log.error("Couldn't roll back transaction",rbe);
			}	
		}finally{
		hbu.closeSession(session);
		}
	
}
	//// get containeredit by  kishor 

public List getContainerEdit(Long containerId) {

	System.out.println("into dao Container by kishor+++++++ : "+containerId);
	HibernateUtility hbu = null;
	Session session =  null;
	Query query = null;
	 List list = null;
	 try {
		 hbu = HibernateUtility.getInstance();
		 session = hbu.getHibernateSession();
		 query = session.createSQLQuery("select pt.Container_Name, pt.Packing_Type, su.unit_name  from  packing_type pt join sold_units su where pk_type_id=:containerId");
		 query.setParameter("containerId", containerId);
		 list = query.list(); 
	} catch (RuntimeException e) {
		e.printStackTrace();
	}
	 
	 finally
	 {
		 if (session!=null) {
			hbu.closeSession(session);
		}
	 }
	 System.out.println("out of dao - return container List : "+list);
			return list;

}
	// delete cont
public void deletCont(String ContName) {
	System.out.println("cont id in dao - "+ContName);
	HibernateUtility hbu = null ;
	Transaction tx = null;
	 Session session = null;
	 List list  = null;
	 try {
		 hbu = HibernateUtility.getInstance();
		 session = hbu.getHibernateSession();
		 tx = session.beginTransaction();
		 Query query = session.createSQLQuery("delete from packing_type where pk_type_id='"+ContName+"'");
			int seletedRecords = query.executeUpdate();
			tx.commit();
		System.out.println("tx commit");	
			System.out.println("Number of credit Cusr deleted == + = "+seletedRecords);
			//list = query.list();
			
	} catch (Exception e) {
		e.printStackTrace();
		// TODO: handle exception
	}
		
	 finally
	 {
		 if (session!=null) {
			hbu.closeSession(session);
		//	tx.commit();
		}
	 }
	
}


	public List<Packing_InfoBean> getAllContainer()
	{
		HibernateUtility hbu = null;
		Session session =  null;
		Query query = null;
		 List<Packing_InfoBean> list = null;
		 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			query = session.createQuery("from Packing_InfoBean");
			 /*query = session.createQuery("from CustomerDetailsBean");*/
			 list = query.list(); 
		} catch (Exception e) {
			Log.error("Error in getAllContainer", e);
		}
		 
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
			
				return list;
		
	}
	
	public List getAllContainer1()
	{
		HibernateUtility hbu = null;
		Session session =  null;
		Query query = null;
		 List list = null;
	 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			 query = session.createQuery("from Packing_InfoBean");
			 list = query.list(); 
		} catch (RuntimeException e) {
			Log.error("Error in getAllContainer", e);
		}
		 
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
				return list;
		
	}
	// get cont to deleete
	public List getAllContainertodel()
	{
		HibernateUtility hbu = null;
		Session session =  null;
		Query query = null;
		 List list = null;
	 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			 query = session.createQuery("from Packing_InfoBean");
			 list = query.list(); 
			 System.out.println("to get all cont - list size - "+query.list().size());
		} catch (RuntimeException e) {
			Log.error("Error in getAllContainer", e);
		}
		 
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
				return list;
		
	}
	
	public List getAllPacking()
	{
		HibernateUtility hbu = null;
		Session session =  null;
		Query query = null;
		 List list = null;
	 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			 query = session.createQuery("from Packing_InfoBean");
			 list = query.list(); 
		} catch (RuntimeException e) {
			Log.error("Error in getAllUnits", e);
		}
		 
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
				return list;
		
	}
	

	public List getAllpack_Type()
	{
		HibernateUtility hbu = null;
		Session session =  null;
		Query query = null;
		List<Packing_InfoBean> pib = null;
		 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			// query = session.createQuery("from Pack_InfoBean");
			 query = session.createSQLQuery("SELECT pk_type_id,Packing_Type,Container_Name FROM oil.packing_type");
		
				List<Object[]> list = query.list();
				pib = new ArrayList<Packing_InfoBean>(0);

				for (Object[] object : list) {

					Packing_InfoBean reports = new Packing_InfoBean();
					reports.setPacking_Id(Long.parseLong(object[0].toString()));
					reports.setPacking_Type(object[1].toString());
					reports.setContainerName(object[2].toString());
					pib.add(reports);
				}
			 System.out.println("Pack_InfoBean list size =+++===="+list.size());
			 
			
		} catch (RuntimeException e) {
			Log.error("Error in getAllpack_Type", e);
		}
	
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
		 return pib;
		
	}
	
	public List getContainerName() {
		HibernateUtility hbu = null ;
		 Session session = null;
		 List list  = null;
		 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
	/* 			Query query = session.createSQLQuery("select p.product_name,p.insert_date from product_details p where p.fk_supplier_id="+supplierId );*/
				Query query = session.createSQLQuery("select pk_type_id,Packing_Type,Container_Name,Extra_Packing,u.unit_name from packing_type left join sold_units u on u.pk_unit_id=fk_unit_Id");
				
				list = query.list();
				
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
			
		 finally
		 {
			 if (session!=null) {
				hbu.closeSession(session);
			}
		 }
			return list;

	}
	
	public List getproductDetailInGridForContainer(String containerName, String capacity) {
		HibernateUtility hbu=null;
		Session session=null;
		List list=null;
			
			try{
			 hbu=HibernateUtility.getInstance();
			 session=hbu.getHibernateSession();

			Query query=session.createSQLQuery("select pk_type_id,Packing_Type,Container_Name,Extra_Packing,u.unit_name from packing_type left join sold_units u on u.pk_unit_id=fk_unit_Id where Container_Name='"+containerName+"' and Packing_Type='"+capacity+"'");
			 list = query.list();
			 
			System.out.println(list.size()+"*************");
			}catch(RuntimeException e){
				
			Log.error("Error in getProductDetails",e);
		}finally{
				if(session!=null){
					 
					hbu.closeSession(session);
				}
				
			}
		
		return list;
	}
	// get all container 
	public List getContailerList(){
		
		HibernateUtility hbu=null;
		Session session=null;
		List<Packing_InfoBean> productList=null;
	try{	

		hbu = HibernateUtility.getInstance();
		session = hbu.getHibernateSession();

		//Query query=session.createSQLQuery("SELECT p.product_name, c.cat_name , p.manufacturing_company, p.tax_percentage, t.tax_name FROM product_details p  LEFT JOIN tax_details t on t.pk_tax_id = p.fk_tax_id LEFT JOIN categories c on c.pk_cat_id = p.fk_cat_id;");
		//Query query = session.createQuery("from PurchaseBill2");
		//Query query=session.createSQLQuery("select pt.Container_Name,pt.packing_type,su.unit_name, pt.Extra_Packing from packing_type pt JOIN sold_units su ");
		//Query query=session.createSQLQuery("select Container_Name,packing_type,unit_name,Extra_Packing from packing_type JOIN sold_units");
		Query query=session.createSQLQuery("select pt.Container_Name,pt.packing_type,su.unit_name, pt.Extra_Packing from packing_type pt LEFT JOIN sold_units su on fk_unit_Id=su.pk_unit_id");
		
		List<Object[]> list = query.list();

		System.out.println("List in  dao"+list.size());
		

		productList= new ArrayList<Packing_InfoBean>(0);


	for (Object[] object : list) {	
		Packing_InfoBean p = new Packing_InfoBean();
		p.setContainerName(object[0].toString());
		p.setPacking_Type(object[1].toString());
		p.setUnitName(object[2].toString());
		p.setExtraPacking((object[3].toString()));
		//p.setTaxType(object[4].toString());
		
		productList.add(p);

	}}catch(RuntimeException e){	

	}
	finally{

	hbu.closeSession(session);	
	}
	return productList;
	}
	
}

