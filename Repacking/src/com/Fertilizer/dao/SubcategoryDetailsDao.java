package com.Fertilizer.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.Fertilizer.bean.GetSubcategoryDetails;
import com.Fertilizer.hibernate.SubCategoryDetailsBean;
import com.Fertilizer.utility.HibernateUtility;

public class SubcategoryDetailsDao {
	public List getSubCategoryName()
	{
		HibernateUtility hbu=null;
		Session session=null;
		
		List<GetSubcategoryDetails> itemlist=null;
		 List<Object[]> list = null;
		
		try
		{
				hbu = HibernateUtility.getInstance();
				session = hbu.getHibernateSession();
				//Query query=session.createQuery("select invoiceNo , toPay  from ProfarmaDetail  group by invoiceNo order by invoiceNo DESC");
				//Query query=session.createSQLQuery("select s.pk_subcat_id,s.sub_cat_name,c.cat_name from sub_categories s LEFT Join categories c on c.pk_cat_id=s.fk_cat_id;");
				//Query query=session.createSQLQuery("select s.pk_subcat_id,c.cat_name,s.sub_cat_name from sub_categories s LEFT Join categories c on c.pk_cat_id=s.pk_subcat_id");
				Query query=session.createSQLQuery("select pt.pk_subcat_id,su.cat_name, pt.sub_cat_name from sub_categories pt LEFT JOIN categories su on su.pk_cat_id=pt.fk_cat_id");
				list = query.list();
				itemlist = new ArrayList<GetSubcategoryDetails>(0);
				
		 for (Object[] objects : list) {
			 GetSubcategoryDetails bean = new GetSubcategoryDetails();
			
			bean.setSubcatId(Long.parseLong(objects[0].toString()));;
			bean.setSubcategoryName((String)objects[1]);
			bean.setCategoryName(((String)objects[2]));
			 
			itemlist.add(bean);
			}
		 }
		catch(RuntimeException  e)
		{
				
		}finally
		{if(session!=null){
			hbu.closeSession(session);	
		}
		}
		return itemlist;
	}
	
	
	public void deletesubCat(String delsubcat) {
		
		System.out.println("delete unit id - "+delsubcat);
			HibernateUtility hbu = null ;
			 Session session = null;
			 Transaction tx = null;
			 List list  = null;
			 try {
				 hbu = HibernateUtility.getInstance();
				 session = hbu.getHibernateSession();
				  tx = session.beginTransaction();
					Query query1 = session.createSQLQuery("delete from goods_receive where fk_subCat_id = "+delsubcat);
					int seletedRecords1 = query1.executeUpdate();
					Query query2 = session.createSQLQuery("delete from product_details where fk_subCat_id = "+delsubcat);
					int seletedRecords2 = query2.executeUpdate();
					Query query3 = session.createSQLQuery("delete from sub_categories where pk_subcat_id = "+delsubcat);
					int seletedRecords3 = query3.executeUpdate();
					tx.commit();
					System.out.println("Number of credit Cusr goods deleted == + ="+seletedRecords1);
					System.out.println("Number of credit Cusr products deleted == + ="+seletedRecords2);
					System.out.println("Number of credit Cusr subcat deleted == + ="+seletedRecords3);
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
