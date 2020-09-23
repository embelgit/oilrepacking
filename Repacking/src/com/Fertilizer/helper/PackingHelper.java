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
import javax.servlet.http.HttpSession;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.jfree.util.Log;
import com.Fertilizer.hibernate.CotainerGoodsReceiveBean;
import com.Fertilizer.bean.GetpackingDetails;
import com.Fertilizer.dao.PackingDao;
import com.Fertilizer.hibernate.PackingBean;
import com.Fertilizer.hibernate.Stock;
import com.Fertilizer.hibernate.containerStock;
import com.Fertilizer.utility.HibernateUtility;

public class PackingHelper {

	public void PackDetails(HttpServletRequest request,
			HttpServletResponse response) {
			
			
		String proName = request.getParameter("proName");
		System.out.println("In Helper" + proName );
		String fk_type_id = request.getParameter("fk_packType_id");
		System.out.println("In Helper" + fk_type_id );
		String container = request.getParameter("container");
		System.out.println("In Helper" + container);
		String packingQuantity = request.getParameter("packingQuantity");
		String fkCatId = request.getParameter("fkCatId");
		String fkSubCatId = request.getParameter("fkSubCatId");
		String fkShopId = request.getParameter("fkShopId");
		String containerName = request.getParameter("containerName");
		String capacity = request.getParameter("fk_type_id");
		String unitName = request.getParameter("unitName");
		
		
		PackingDao pd1 = new PackingDao();
		 List stkList2=pd1.getAllPackingEntry();
		
		
		/*String subCategoryName = request.getParameter("subCategoryName");*/
		 if(stkList2.size() == 0){
	        	System.out.println("In if block of stock empty");
		PackingBean pb = new PackingBean();
		
		pb.setProName(proName);
		pb.setFk_type_id(Long.parseLong(fk_type_id));
		pb.setContainer(container);
		pb.setPackingQuantity(Long.parseLong(packingQuantity));
		pb.setFkCatId(Long.parseLong(fkCatId));
		pb.setFkSubCatId(Long.parseLong(fkSubCatId));
		pb.setFkShopId(Long.parseLong(fkShopId));
		/*cdb.setSubCategoryName(subCategoryName);*/
		
		PackingDao pd = new PackingDao();
		pd.addpacking(pb);
		 }
		 
		else{
			 for(int j=0;j<stkList2.size();j++){
	             	
				    PackingBean st = (PackingBean)stkList2.get(j);
	             	String itemName = st.getProName();
	             	Long catId = st.getFkCatId();
	             	Long packTypeId=st.getFk_type_id();
	             	Long subCatId = st.getFkSubCatId();
	             	Long PkStockId = st.getPacking_Id();
	             	//String batchNumber = st.getBatchNum();
	             	/*If ItemName Is Already Exists In Stock Table */ 
	             	System.out.println("fk_cat_id from stock = = "+catId);
	             	System.out.println("subCatId from stock = = "+subCatId);
	             	System.out.println("fk_cat_id from ui = = "+fkCatId);
	             	 //System.out.println("batchNumber from stock table"+batchNumber);
	         		// System.out.println("batchNo from goods receive"+batchNo);
	    	   System.out.println("In else Part");	
	    	  
	    	   if(proName.equals(itemName) && subCatId==Double.parseDouble(fkSubCatId) && catId== Long.parseLong(fkCatId) && packTypeId==Long.parseLong(fk_type_id)){
	            		 System.out.println("inside If");
	    		   
	    		   			Double qunty = Double.parseDouble(st.getContainer());
	            		
	            		 Double updatequnty = (double) (qunty + Double.parseDouble(container));
	            		
	            		 HibernateUtility hbu = HibernateUtility.getInstance();
	            		 Session session = hbu.getHibernateSession();
	            		 Transaction transaction = session.beginTransaction();
	            		 
	            		 DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	            		 Date date2 = new Date();
	            	
	            		 PackingBean updateStock = (PackingBean) session.get(PackingBean.class, new Long(PkStockId));
	            		 updateStock.setContainer(updatequnty.toString());
	            		 
	            		session.saveOrUpdate(updateStock);
	            		transaction.commit();
	            		break;
	            	}
	    	   else
	        	{
	        		/*ItemName is Not Exists */
	        		if(j+1 == stkList2.size()){
	        			
	        			PackingBean pb = new PackingBean();
	        			
	        			pb.setProName(proName);
	        			pb.setFk_type_id(Long.parseLong(fk_type_id));
	        			pb.setContainer(container);
	        			pb.setPackingQuantity(Long.parseLong(packingQuantity));
	        			pb.setFkCatId(Long.parseLong(fkCatId));
	        			pb.setFkSubCatId(Long.parseLong(fkSubCatId));
	        			pb.setFkShopId(Long.parseLong(fkShopId));
	        			/*cdb.setSubCategoryName(subCategoryName);*/
	        			
	        			PackingDao pd = new PackingDao();
	        			pd.addpacking(pb);
	        			
	        		}
			
		}
		}
			 
				HibernateUtility hbu2=null;
				Session session2=null;
				Transaction transaction2 = null;
				
				try
				{
					Long  PkContainerStockId;
				 Double quantity2;
				 hbu2 = HibernateUtility.getInstance();
				 session2 = hbu2.getHibernateSession();
				 transaction2 = session2.beginTransaction();
				
				 Query query2 = session2.createSQLQuery("select pk_container_stock_id , quantity from container_stock_detail where container_name='"+containerName+"' AND  capacity='"+capacity+"' AND  unit='"+unitName+"'");
				
				 List<Object[]> list2 = query2.list();
				  for (Object[] object : list2) {
					  System.out.println(Arrays.toString(object));  
					  PkContainerStockId = Long.parseLong(object[0].toString());
					  quantity2 = Double.parseDouble(object[1].toString());
					  System.out.println("PkStockId " +PkContainerStockId);
					  System.out.println("quantity " +quantity2);
					  
					  Double updatequnty1 = (double) (quantity2 - Double.parseDouble(container));
					  System.out.println("updatequnty " +updatequnty1);
					
					  containerStock Stock1 = (containerStock) session2.load(containerStock.class, new Long(PkContainerStockId));
				    
				    Stock1.setQuantity(updatequnty1);
					 
				    session2.saveOrUpdate(Stock1);
				    transaction2.commit();
				   System.out.println("Success ");	 
				   }
					
			}
				catch(RuntimeException e){
					try{
						transaction2.rollback();
					}catch(RuntimeException rbe)
					{
						Log.error("Couldn't roll back tranaction",rbe);
					}	
				}finally{
					hbu2.closeSession(session2);
				}
		
			 
			 
	//stock minus from stock detail table
	HibernateUtility hbu1=null;
	Session session1=null;
	Transaction transaction1 = null;
	
	try
	{
	 Long PkStockId;
	 Double quantity1;
	 hbu1 = HibernateUtility.getInstance();
	 session1 = hbu1.getHibernateSession();
	 transaction1 = session1.beginTransaction();
	
	 Query query1 = session1.createSQLQuery("select PkStockId , unpacked_Quantity from stock_detail where ProductName='"+proName+"' AND  FkSubCatId='"+fkSubCatId+"' AND  FkCatId='"+fkCatId+"'");
	
	 List<Object[]> list1 = query1.list();
	 
	  for (Object[] object : list1) {
	  System.out.println(Arrays.toString(object));  
	  PkStockId = Long.parseLong(object[0].toString());
	  quantity1 = Double.parseDouble(object[1].toString());
	  System.out.println("PkStockId " +PkStockId);
	  System.out.println("quantity " +quantity1);
	  
	  Double updatequnty = (double) (quantity1 - Double.parseDouble(packingQuantity));
	  System.out.println("updatequnty " +updatequnty);
	
    Stock Stock = (Stock) session1.load(Stock.class, new Long(PkStockId));
    
    Stock.setUnpackedQuantity(updatequnty);
	 
	 session1.saveOrUpdate(Stock);
    transaction1.commit();
   System.out.println("Success ");	 
   }
	  
	}
	catch(RuntimeException e){
		try{
			transaction1.rollback();
		}catch(RuntimeException rbe)
		{
			Log.error("Couldn't roll back tranaction",rbe);
		}	
	}finally{
		hbu1.closeSession(session1);
	}
  }
}
	
	
	
	public Map getAllProductforpacking() {

		int count = 1;
		PackingDao dao = new PackingDao();
		List list= dao.getAllProductBypacking();
		
		Map  map =  new HashMap();
		for(int i=0;i<list.size();i++)
		{
			
			Object[] o = (Object[])list.get(i);
			System.out.println("packing grid dropdown -> "+Arrays.toString(o));
			GetpackingDetails bean = new GetpackingDetails();
			System.out.println(Arrays.toString(o));
			
			
			bean.setProduct(o[0].toString());;
			bean.setQuantityDouble(Double.parseDouble(o[1].toString()));
			
				bean.setCatid(Long.parseLong(o[2].toString()));
				bean.setSubCatid(Long.parseLong(o[3].toString()));
				bean.setShopid(Long.parseLong(o[4].toString()));
				bean.setCatname(o[5].toString());
				bean.setSubcatname(o[6].toString());
			
			//bean.setTotalAmount((Double)o[1]);
			System.out.println("***************"+o[0]);
			map.put(count,bean);
			count++;
		}
		return map;

	}


	// get unt fr packing
	public Map getunit(String unitid) 
	{
		
		PackingDao dao = new PackingDao();
		List list = dao.getunit(unitid);
		Map map = new HashMap();

//		GoodsReceiveHibernate bean = new GoodsReceiveHibernate();
		CotainerGoodsReceiveBean bean = new CotainerGoodsReceiveBean();
		for (int i = 0; i < list.size(); i++) 
		{
			Object[] o = (Object[]) list.get(i);
			System.out.println(" Result - "+Arrays.toString(o));
			
			bean.setPkContainerGoodsReceiveId(Long.parseLong(o[0].toString()));
			bean.setUnit(o[1].toString());
			System.out.println("~~~~~~~~~ ~~~~~~ ~~~~~ pk  ID -- "+bean.getPkContainerGoodsReceiveId()+" & unit  is - - "+bean.getUnit());
		}
		map.put(bean.getPkContainerGoodsReceiveId(), bean);
		return map;
	}
}
