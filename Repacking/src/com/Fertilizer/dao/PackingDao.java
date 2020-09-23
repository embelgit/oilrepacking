package com.Fertilizer.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.hibernate.PackingBean;
import com.Fertilizer.utility.HibernateUtility;

public class PackingDao {
	
	public void addpacking(PackingBean pb) {
		
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
		session.save(pb);
		System.out.println("Successful1");
		transaction.commit();
		System.out.println("Successful");
		}
		catch(RuntimeException e){
			try{
				transaction.rollback();
			}catch(RuntimeException rbe)
			{
				Log.error("Couldn't roll back tranaction",rbe);
			}	
		}finally{
		hbu.closeSession(session);
		}
	
}
	
	public List getAllProductBypacking() {
		HibernateUtility hbu = null ;
		 Session session = null;
		 List list  = null;
		 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
	/* 			Query query = session.createSQLQuery("select p.product_name,p.insert_date from product_details p where p.fk_supplier_id="+supplierId );*/
				Query query = session.createSQLQuery("SELECT ProductName, unpacked_Quantity, FkCatId,FkSubCatId, fk_shop_id, cat_name, sub_cat_name FROM oil.stock_detail where unpacked_Quantity>0");
	//			Query query = session.createSQLQuery("SELECT ProductName, unpacked_Quantity, FkCatId,FkSubCatId,fk_shop_id FROM oil.stock_detail ");
		//		Query query = session.createSQLQuery("SELECT ProductName, unpacked_Quantity, cat_name, sub_cat_name FROM oil.stock_detail");
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
	
	/*To Fetch ItemName From packing Table */
	public List getAllPackingEntry()
	{
		HibernateUtility hbu=null;
		Session session=null;
		List list=null;
		try{
		 hbu = HibernateUtility.getInstance();
		 session = hbu.getHibernateSession();
		 Query query = session.createQuery("from PackingBean");
		 list = query.list();
		}
			catch(Exception e){	
				e.printStackTrace();
		}
			finally
			{
					if(session!=null){
					hbu.closeSession(session);
				}
			}
		
	return list;
	}
//get unit
	
	public List getunit(String unitid) 
	{
		
		System.out.println("unit id - in dao - "+unitid);
		 HibernateUtility hbu = null ;
		 Session session = null;
		 List list  = null;

		 try 
		 {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			
//			 Query query = session.createSQLQuery("SELECT pk_type_id,Unit_Name from packing_type WHERE pk_type_id ='"+unitid+"'");
			 Query query = session.createSQLQuery("SELECT Pk_Container_Pur_Id, unit from container_purchase WHERE Pk_Container_Pur_Id = '"+unitid+"'");
			 list = query.list();
			System.out.println("in query list size - "+query.list().size());
		//	System.out.println("Result got for total amount is ----  "+list.toString()); 
			 
			} catch (Exception e) {
				e.printStackTrace();
				
			}
			
		   finally
		   {
			  if (session!=null)  
			  {
			 	hbu.closeSession(session);
			  }
		   }
		 	
		 return list;
	}

}
