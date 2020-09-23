package com.Fertilizer.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;

import com.Fertilizer.bean.GetMeasuringUnits;
import com.Fertilizer.hibernate.MeasuringUnitsBean;
import com.Fertilizer.hibernate.ProductDetailsBean;
import com.Fertilizer.utility.HibernateUtility;

public class MeasuringUnitsDao {

	public void addUnit(MeasuringUnitsBean bean) {
		HibernateUtility hbu=null;
		Session session = null;
		Transaction transaction = null;
		
		try{
		 hbu = HibernateUtility.getInstance();
		session = hbu.getHibernateSession();
		 transaction = session.beginTransaction();
	
		 System.out.println("Tx started");
		session.save(bean);
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
	
	
	public List getUnitsDetails(){
		
		HibernateUtility hbu=null;
		Session session=null;
		List<GetMeasuringUnits> unitList=null;
	try{	

		hbu = HibernateUtility.getInstance();
		session = hbu.getHibernateSession();

		Query query=session.createSQLQuery("SELECT unit_name,unit_description from sold_units");
		
		List<Object[]> list = query.list();


		unitList= new ArrayList<GetMeasuringUnits>(0);


	for (Object[] o : list) {	
		GetMeasuringUnits p = new GetMeasuringUnits();
		p.setUnitName(o[0].toString());
		p.setUnitDescription(o[1].toString());
		
		unitList.add(p);

	}}catch(RuntimeException e){	

	}
	finally{

	hbu.closeSession(session);	
	}
	return unitList;
	}
	
	public List getAllUnits()
	{
		HibernateUtility hbu = null;
		Session session =  null;
		Query query = null;
		 List list = null;
	 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			 query = session.createQuery("from MeasuringUnitsBean");
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
	
	
	
	public List getAllUnit()
	{
			HibernateUtility hbu = null;
			Session session =  null;
			Query query = null;
			 List<ProductDetailsBean> list = null; 
			 try {
				 hbu = HibernateUtility.getInstance();
				 session = hbu.getHibernateSession();
				query = session.createQuery("from MeasuringUnitsBean");
				 /*query = session.createQuery("from CustomerDetailsBean");*/
				 list = query.list(); 
			} catch (Exception e) {
				Log.error("Error in getAllPriduct", e);
			}
			 
			 finally
			 {
				 if (session!=null) {
					hbu.closeSession(session);
				}
			 }
				
					return list;
			
		}

	
public void deleteUnit(String delUnit) {
		
	System.out.println("delete unit id - "+delUnit);
		HibernateUtility hbu = null ;
		 Session session = null;
		 Transaction tx = null;
		 List list  = null;
		 try {
			 hbu = HibernateUtility.getInstance();
			 session = hbu.getHibernateSession();
			  tx = session.beginTransaction();
				Query query1 = session.createSQLQuery("delete from product_details where fk_unit_id ="+delUnit);
				Query query2 = session.createSQLQuery("delete from sold_units where pk_unit_id ="+delUnit);
				int seletedRecords1 = query1.executeUpdate();
				int seletedRecords2 = query2.executeUpdate();
				tx.commit();
				System.out.println("Number of credit Cusr prodct detail deleted == + ="+seletedRecords1);
				System.out.println("Number of credit Cusr sold unit deleted == + ="+seletedRecords2);
				//list = query.list();
				
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
		
	}

	}
	

