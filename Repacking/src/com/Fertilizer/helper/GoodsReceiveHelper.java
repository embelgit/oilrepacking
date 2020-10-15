package com.Fertilizer.helper;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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

import com.Fertilizer.bean.BillBean;
import com.Fertilizer.bean.ContainerDetailsFromGoodsReceive;
import com.Fertilizer.bean.CustomerBean;
import com.Fertilizer.bean.GetPODetailsForDcUpdate;
import com.Fertilizer.bean.GetPODetailsForGoodsReceive;
import com.Fertilizer.bean.GetProductDetails;
import com.Fertilizer.bean.GetPurchaseProduct;
import com.Fertilizer.bean.PurchaseDetailsFromGoodsReceive;
import com.Fertilizer.bean.PurchaseStockMinus;
import com.Fertilizer.bean.SaleReports;
import com.Fertilizer.bean.StockDetail;
import com.Fertilizer.dao.GoodsReceiveDao;
import com.Fertilizer.dao.ProductDetailsDao;
import com.Fertilizer.dao.StockDao;
import com.Fertilizer.hibernate.CotainerGoodsReceiveBean;
import com.Fertilizer.hibernate.FertilizerBillBean;
import com.Fertilizer.hibernate.GoodsReceiveBean;
import com.Fertilizer.hibernate.Packing_InfoBean;
import com.Fertilizer.hibernate.ProductDetailsBean;
import com.Fertilizer.hibernate.PurchaseReturnBean;
import com.Fertilizer.hibernate.Stock;
import com.Fertilizer.hibernate.SubCategoryDetailsBean;
import com.Fertilizer.hibernate.containerStock;
import com.Fertilizer.utility.HibernateUtility;

public class GoodsReceiveHelper {

	Long barcodeNo;
	String catName;
	String productName;
	String companyName;
	Long PkStockId;
	// Double quantityFromStockTable;
	// Double quantityFromStockTable;
	Double interGST;
	Double taxPercentage;

	public void goodsReceived(HttpServletRequest request, HttpServletResponse response) throws ParseException {

		System.out.println("IN HELPER");
		GoodsReceiveDao dao = new GoodsReceiveDao();

		Integer count = Integer.parseInt(request.getParameter("count"));
		System.out.println(count);

		GoodsReceiveBean bean = new GoodsReceiveBean();

		for (int i = 0; i < count; i++) {
			HttpSession session3 = request.getSession();
			GoodsReceiveDao data = new GoodsReceiveDao();
			List stkList = data.getLastBarcodeNo();

			for (int j = 0; j < stkList.size(); j++) {

				BillBean st = (BillBean) stkList.get(j);
				barcodeNo = st.getBarcodeNo();
				barcodeNo++;

			}
			
			String cat = request.getParameter("cat");
			String subcat = request.getParameter("subcat");
			System.out.println("sub name - "+subcat+" , cat name - "+cat);
			
			String supplier = request.getParameter("supplier");
			String fk_cat_id = request.getParameter("fk_cat_id");
			String fk_subCat_id = request.getParameter("fk_subCat_id");
			String fk_shop_id = request.getParameter("fk_shop_id");
			catName = request.getParameter("catName");
			String transExpence = request.getParameter("transExpence");
			/* String dueDate = request.getParameter("dueDate"); */
			String total = request.getParameter("total");
			/* String fk_godown_id = request.getParameter("fk_godown_id"); */
			String purchaseDate = request.getParameter("purchaseDate");
			String productID = request.getParameter("productID" + i);
			String mrp = request.getParameter("mrp" + i);
			String gst = request.getParameter("gst" + i);
			String igst = request.getParameter("igst" + i);
			System.out.println("IN HELPER gst==" + gst);
			System.out.println("IN HELPER igst==" + igst);

			System.out.println(productID + "poID");
			if (productID == null) {

				break;
			} else {
				bean.setPkPOId(Long.parseLong(productID));
			}

			companyName = request.getParameter("companyName" + i);
			if (companyName == null) {
				break;
			} else {
				bean.setCompanyName(companyName);
			}

			productName = request.getParameter("productName" + i);
			if (productName == null) {
				break;
			} else {
				bean.setProductName(productName);
			}

			String buyPrice = request.getParameter("buyPrice" + i);
			if (buyPrice == null) {
				break;
			} else {
				bean.setBuyPrice(Double.parseDouble(buyPrice));
			}

			String salePrice = request.getParameter("salePrice" + i);
			if (salePrice == null) {
				break;
			} else {
				bean.setSalePrice(Double.parseDouble(salePrice));
			}

			String weight = request.getParameter("weight" + i);
			if (weight.equals("") || weight.equals(null)) {
				bean.setWeight(0d);
			} else {
				bean.setWeight(Double.parseDouble(weight));
			}

			String unit = request.getParameter("unit" + i);
			System.out.println("hi this is kishor==========================00000000++++++++++++" + unit+" weight set in purchase -  "+bean.getWeight());
			if (unit == null) {
				break;
			} else {
				bean.setUnit(unit);
			}

			String quantity = request.getParameter("quantity" + i);
			System.out.println("quantity = = = =" + quantity);
			if (quantity == null) {
				break;
			} else {
				bean.setQuantity(Double.parseDouble(quantity));
				bean.setDupQuantity(Double.parseDouble(quantity));
			}

			String dcNum = request.getParameter("dcNum" + i);
			if (dcNum == null) {
				bean.setDcNum(0l);
			} else {
				bean.setDcNum(Long.parseLong(dcNum));
			}

			String weightAftShortMinus = request.getParameter("weightAftShortMinus" + i);
			if (weightAftShortMinus == null) {
				bean.setWeightAftShortMinus(0.0);
			} else {
				bean.setWeightAftShortMinus(Double.parseDouble(weightAftShortMinus));
			}

			System.out.println("weightAftShortMinus = = = =" + weightAftShortMinus);

			/*
			 * String batchNo = request.getParameter("batchNo"+i); if(batchNo==null){
			 * bean.setBatchNo("N/A"); } else{ bean.setBatchNo(batchNo); }
			 */

			Double gstPerc = Double.parseDouble(gst);
			Double igstPerc = Double.parseDouble(igst);
			if (gstPerc != 0.0) {
				Double taxAmnt = ((gstPerc / 100) * Double.parseDouble(total));
				bean.setTaxAmount(taxAmnt);
			} else if (igstPerc != 0.0) {
				Double taxAmnt = ((igstPerc / 100) * Double.parseDouble(total));
				bean.setTaxAmount(taxAmnt);
			}

			String discount = request.getParameter("discount");
			String discountAmount = request.getParameter("discountAmount");
			String billNum = request.getParameter("billNum");

			Date date = new Date();
			bean.setInsertDate(date);

			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			Date newDate = null;
			try {
				newDate = format.parse(purchaseDate);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			bean.setPurchaseDate(newDate);
			if (mrp == null) {
				bean.setMrp(0.0);
			} else {
				bean.setMrp(Double.parseDouble(mrp));
			}

			Double tax = Double.parseDouble(gst);
			if (tax == null || tax == 0) {
				bean.setTaxPercentage(0.0);
			} else {
				bean.setTaxPercentage(tax);
			}

			Double igstx = Double.parseDouble(igst);
			if (igstx == null || igstx == 0) {
				bean.setiGstPercentage(0.0);
			} else {
				bean.setiGstPercentage(igstx);
			}

			String gross = request.getParameter("grossTotal");
			if (gross != null) {
				bean.setGrossTotal(Double.parseDouble(gross));
				bean.setBillPaymentPending(Double.parseDouble(gross));
			} else {
				bean.setGrossTotal(0.0);
			}

			/*
			 * SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd"); //String
			 * pDate = request.getParameter("pDate"); Date purchaseDateq = null; try {
			 * purchaseDateq = dateFormat.parse(purchaseDate); } catch (ParseException e) {
			 * // TODO Auto-generated catch block e.printStackTrace(); }
			 * bean.setPurchaseDate(purchaseDateq);
			 */

			session3.setAttribute("barcodeNo", barcodeNo);

			if (barcodeNo == null) {
				bean.setBarcodeNo(1000l);
			} else {
				bean.setBarcodeNo(barcodeNo);
			}

			// String pDate = request.getParameter("pDate");
			/*
			 * Date dueDateq = null; try { dueDateq = dateFormat.parse(dueDate); } catch
			 * (ParseException e) { // TODO Auto-generated catch bloc e.printStackTrace(); }
			 */
			int quant = Integer.parseInt(quantity);

			try {
				for (int x = 0; x < quant; x++) {
					FileInputStream fstream = new FileInputStream("D:/barcose/input.prn");

					BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
					FileWriter fw = new FileWriter("D:/barcose/Output.prn");

					BufferedWriter bw = new BufferedWriter(fw);
					String strLine;
					String str1;
					while ((strLine = br.readLine()) != null) {

						if (strLine.equals("~product")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + productName + "\"";
						} else if (strLine.equals("~company")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + companyName + "\"";

						} else if (strLine.equals("~quanti")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + quantity + "\"";

						} else if (strLine.equals("~bar")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + barcodeNo + "\"";
						}

						System.out.println(strLine);
						bw.write(strLine + "\r\n");

						/*
						 * // Print the content on the console
						 * System.out.println("@@@@@@@@@@@@@@@@@@@@@@"+strLine);
						 */
					}

					bw.close();
					// Close the input stream
					br.close();
					/*
					 * List cmdAndArgs = Arrays.asList("cmd", "D:", "cd barcose", "printbatch.bat");
					 */
					System.out.println("hello Shreeemant::");
					// File dir = new File("D:/barcose");

					/*
					 * List cmdAndArgs = Arrays.asList("cmd", "/d", "printbatch.bat"); File dir =
					 * new File("D:/barcose");
					 */

					List cmdAndArgs = Arrays.asList("cmd", "/c", "printbatch.bat");
					File dir = new File("C:/barcose");

					ProcessBuilder pb = new ProcessBuilder(cmdAndArgs);
					pb.directory(dir);
					Process p = pb.start();
				}
			} catch (Exception e) {

			}

			if (billNum == null) {
				bean.setBillNum("N/A");
			} else {
				bean.setBillNum(billNum);
			}

			if (discount == "") {
				bean.setDiscount(0.0);
			} else {
				bean.setDiscount(Double.parseDouble(discount));
			}

			if (discountAmount == "") {
				bean.setDiscountAmount(0.0);
			} else {
				bean.setDiscountAmount(Double.parseDouble(discountAmount));
			}

			if (transExpence == "") {
				bean.setExpenses(0.0);
			} else {
				bean.setExpenses(Double.parseDouble(transExpence));
			}

			bean.setSupplier(Long.parseLong(supplier));
			bean.setTotalAmount(Double.parseDouble(total));
			bean.setFkCategoryId(Long.parseLong(fk_cat_id));
			System.out.println(fk_cat_id);
			bean.setFk_subCat_id(Long.parseLong(fk_subCat_id));
			bean.setFk_shop_id(Long.parseLong(fk_shop_id));
			/* bean.setFkGodownId(Long.parseLong(fk_godown_id)); */
			Long newIdForUpdate = Long.parseLong(productID);

			Double bp = bean.getBuyPrice();
			Double qnt = bean.getQuantity();
			Double tota = bp * qnt;
			bean.setPerProductTotal(tota);

			dao.updateProductStatus(newIdForUpdate);

			dao.addGoodsReceive(bean);

			StockDao dao1 = new StockDao();
			List stkList2 = dao1.getAllStockEntry();

			/* If Stock Is Empty */
			if (stkList2.size() == 0) {
				System.out.println("In if block of stock empty");
				Stock newEntry = new Stock();
				
				newEntry.setCatname(cat);
				newEntry.setSubcatname(subcat);
				newEntry.setCatID(Long.parseLong(fk_cat_id));
				newEntry.setSubCatId(Long.parseLong(fk_subCat_id));
				newEntry.setFk_shop_id(Long.parseLong(fk_shop_id));
				System.out.println(fk_shop_id);
				newEntry.setProductName(productName);
				newEntry.setCompanyName(companyName);
				newEntry.setWeight(0d);
				newEntry.setQuantity(Double.parseDouble(quantity));
				System.out.println("for pscking qnty" + quantity);
				newEntry.setUnpackedQuantity(Double.parseDouble(quantity));
		//		newEntry.setBillNo(Long.parseLong(billNum));
				System.out.println("cat name set - "+newEntry.getCatname()+" |||  sub cat name set - "+newEntry.getSubcatname());
				/*
				 * if(batchNo != null){ newEntry.setBatchNum(batchNo); }else{
				 * newEntry.setBatchNum("N/A"); }
				 */
				StockDao dao2 = new StockDao();
				dao2.registerStock(newEntry);

			} else/* To Update Stock Table If It is Not Empty */
			{
				for (int j = 0; j < stkList2.size(); j++) {

					Stock st = (Stock) stkList2.get(j);
					String itemName = st.getProductName();
					Long catId = st.getCatID();
					Long subCatId = st.getSubCatId();
					Long shopId = st.getFk_shop_id();
					String company = st.getCompanyName();
					Double wight = st.getWeight();
					Long PkStockId = st.getPkStockId();
					// String batchNumber = st.getBatchNum();
					/* If ItemName Is Already Exists In Stock Table */
					System.out.println("fk_cat_id from stock = = " + catId);
					System.out.println("subCatId from stock = = " + subCatId);
					System.out.println("fk_cat_id from ui = = " + fk_cat_id);
					System.out.println("subCatId from ui = = " + fk_subCat_id);
					System.out.println("fk_cat_id from s = = " + shopId);
					System.out.println("subCatId from ui = = " + fk_shop_id);
					// System.out.println("batchNumber from stock table"+batchNumber);
					// System.out.println("batchNo from goods receive"+batchNo);
					System.out.println("In else Part");

					if (productName.equals(itemName) && company.equals(companyName)
							&& catId == Long.parseLong(fk_cat_id) && subCatId == Long.parseLong(fk_subCat_id)
							&& shopId == Long.parseLong(fk_shop_id)) {
						System.out.println("inside If");

						Double qunty = st.getQuantity();
						Double packQunty = st.getUnpackedQuantity();

						Double updatequnty = (double) (qunty + Double.parseDouble(quantity));
						Double updatePackQunty = (double) (packQunty + Double.parseDouble(quantity));

						HibernateUtility hbu = HibernateUtility.getInstance();
						Session session = hbu.getHibernateSession();
						Transaction transaction = session.beginTransaction();

						DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
						Date date2 = new Date();

						Stock updateStock = (Stock) session.get(Stock.class, new Long(PkStockId));
						updateStock.setUpdateDate(date2);
						updateStock.setQuantity(updatequnty);
						updateStock.setUnpackedQuantity(updatePackQunty);

						session.saveOrUpdate(updateStock);
						transaction.commit();
						break;
					} else {
						/* ItemName is Not Exists */
						if (j + 1 == stkList2.size()) {

							Stock newEntry = new Stock();
							
							newEntry.setCatname(cat);
							newEntry.setSubcatname(subcat);							
							newEntry.setCatID(Long.parseLong(fk_cat_id));
							newEntry.setSubCatId(Long.parseLong(fk_subCat_id));
							newEntry.setFk_shop_id(Long.parseLong(fk_shop_id));
							newEntry.setProductName(productName);
							newEntry.setCompanyName(companyName);
							newEntry.setWeight(0d);
							newEntry.setQuantity(Double.parseDouble(quantity));
							newEntry.setUnpackedQuantity(Double.parseDouble(quantity));
							System.out.println("cat name set - "+newEntry.getCatname()+" |||  sub cat name set - "+newEntry.getSubcatname());
							// newEntry.setBatchNum("N/A");
							StockDao dao2 = new StockDao();
							dao2.registerStock(newEntry);

						}
					}

				}
			}

		}
	}

	// adding Container Good recieve

	public void addingContainerGoodsReceive(HttpServletRequest request, HttpServletResponse response)
			throws ParseException {

		System.out.println("IN HELPER");
		GoodsReceiveDao dao = new GoodsReceiveDao();

		Integer count = Integer.parseInt(request.getParameter("count"));
		System.out.println(count);

		CotainerGoodsReceiveBean bean = new CotainerGoodsReceiveBean();

		for (int i = 0; i < count; i++) {
			HttpSession session3 = request.getSession();
			GoodsReceiveDao data = new GoodsReceiveDao();
			List stkList = data.getLastBarcodeNo();

			for (int j = 0; j < stkList.size(); j++) {

				BillBean st = (BillBean) stkList.get(j);
				barcodeNo = st.getBarcodeNo();
				barcodeNo++;
				
			}
			
			String supplier = request.getParameter("supplier");
			String total = request.getParameter("total1");
			String purchaseDate = request.getParameter("purchaseDate1");
			String containerName = request.getParameter("containerName"+i);
			String Totalcol = request.getParameter("Total"+i);
			String capacity = request.getParameter("packing_Type"+i);
			String unit = request.getParameter("unitName"+i);
			String gst = request.getParameter("gst" + i);
			String igst = request.getParameter("igst" + i);
			System.out.println("containerName== "+containerName+" capacity packng type "+capacity+" unit - "+unit);
			String salePrice = request.getParameter("salePrice" + i);
			if (salePrice == null) {
				break;
			} else {
				bean.setSalePrice(Double.parseDouble(salePrice));
			}

			String quantity = request.getParameter("quantity" + i);
			System.out.println("quantity = = = =" + quantity);
			if (quantity == null) {
				break;
			} else {
				bean.setQuantity(Double.parseDouble(quantity));
				bean.setDupQuantity(Double.parseDouble(quantity));
			}

			Double gstPerc = Double.parseDouble(gst);
			Double igstPerc = Double.parseDouble(igst);
			if (gstPerc != 0.0) {
				Double taxAmnt = ((gstPerc / 100) * Double.parseDouble(total));
				bean.setTaxAmount(taxAmnt);
			} else if (igstPerc != 0.0) {
				Double taxAmnt = ((igstPerc / 100) * Double.parseDouble(total));
				bean.setTaxAmount(taxAmnt);
			}
			
			if(!"".equals(Totalcol)) {
			bean.setTotalAmt(Double.parseDouble(Totalcol));
			}
			else {
				bean.setTotalAmt((0d));
			}
			System.out.println("");
			String billNum = request.getParameter("billNum1");

			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
			Date newDate = null;
			try {
				newDate = format.parse(purchaseDate);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			bean.setPurchaseDate(newDate);

			Double tax = Double.parseDouble(gst);
			if (tax == null || tax == 0) {
				bean.setTaxPercentage(0.0);
			} else {
				bean.setTaxPercentage(tax);
			}

			Double igstx = Double.parseDouble(igst);
			if (igstx == null || igstx == 0) {
				bean.setiGstPercentage(0.0);
			} else {
				bean.setiGstPercentage(igstx);
			}

			String gross = request.getParameter("grossTotal1");
			if (gross != null) {
				bean.setGrossTotal(Double.parseDouble(gross));
			} else {
				bean.setGrossTotal(0.0);
			}

			session3.setAttribute("barcodeNo", barcodeNo);

			if (barcodeNo == null) {
				bean.setBarcodeNo(1000l);
			} else {
				bean.setBarcodeNo(barcodeNo);
			}

			int quant = Integer.parseInt(quantity);

			try {
				for (int x = 0; x < quant; x++) {
					FileInputStream fstream = new FileInputStream("D:/barcose/input.prn");

					BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
					FileWriter fw = new FileWriter("D:/barcose/Output.prn");

					BufferedWriter bw = new BufferedWriter(fw);
					String strLine;
					String str1;
					while ((strLine = br.readLine()) != null) {

						if (strLine.equals("~product")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + productName + "\"";
						} else if (strLine.equals("~company")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + companyName + "\"";

						} else if (strLine.equals("~quanti")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + quantity + "\"";

						} else if (strLine.equals("~bar")) {
							str1 = br.readLine();
							strLine = str1 + "\"" + barcodeNo + "\"";
						}

						System.out.println(strLine);
						bw.write(strLine + "\r\n");

						/*
						 * // Print the content on the console
						 * System.out.println("@@@@@@@@@@@@@@@@@@@@@@"+strLine);
						 */
					}

					bw.close();
					// Close the input stream
					br.close();
					/*
					 * List cmdAndArgs = Arrays.asList("cmd", "D:", "cd barcose", "printbatch.bat");
					 */
					System.out.println("hello Shreeemant::");
					// File dir = new File("D:/barcose");

					/*
					 * List cmdAndArgs = Arrays.asList("cmd", "/d", "printbatch.bat"); File dir =
					 * new File("D:/barcose");
					 */

					List cmdAndArgs = Arrays.asList("cmd", "/c", "printbatch.bat");
					File dir = new File("C:/barcose");

					ProcessBuilder pb = new ProcessBuilder(cmdAndArgs);
					pb.directory(dir);
					Process p = pb.start();
				}
			} catch (Exception e) {

			}

			if (billNum == null) {
				bean.setBillNum("N/A");
			} else {
				bean.setBillNum(billNum);
			}

			bean.setSupplier(Long.parseLong(supplier));
			bean.setTotalAmount(Double.parseDouble(total));
			bean.setContainerName(containerName);
			bean.setCapacity(Double.parseDouble(capacity));
			if(unit == null || unit == "")
			{
				bean.setUnit("NA");
			}
			else
			{
				bean.setUnit(unit);
			}
			dao.addGoodsReceive(bean);

			StockDao dao1 = new StockDao();
			List stkList2 = dao1.getAllContainerStockEntry();

			// If Stock Is Empty
			if (stkList2.size() == 0) {
				System.out.println("In if block of stock empty");
				containerStock newEntry = new containerStock();

				newEntry.setContainerName(containerName);
				;
				newEntry.setCapacity(Long.parseLong(capacity));
				newEntry.setUnit(unit);
				newEntry.setQuantity(Double.parseDouble(quantity));
				System.out.println("for pscking qnty" + quantity);

				StockDao dao2 = new StockDao();
				dao2.registerContainerStock(newEntry);

			} else // To Update Stock Table If It is Not Empty
			{
				for (int j = 0; j < stkList2.size(); j++) {

					containerStock st = (containerStock) stkList2.get(j);
					String containerNameInSt = st.getContainerName();
					Long cap = st.getCapacity();
					String capacityInSt = cap.toString();
					String unitInst = st.getUnit();
					Long PkStockId = st.getPkContainerStockId();
					System.out.println("cont name - "+containerNameInSt+" , capacity - "+capacityInSt+" , unit - "+unitInst+" , pkstockid - "+PkStockId+" from databases");
					// String batchNumber = st.getBatchNum();
					/// If ItemName Is Already Exists In Stock Table
					System.out.println("container from stock = = " + containerNameInSt);
					System.out.println("capacity from stock = = " + capacityInSt);
					System.out.println("unit from stock = = " + unitInst);
					System.out.println("container from ui = = " + containerName);
					System.out.println("capacity from ui = = " + capacity);

					System.out.println("unit from ui = = " + unit);
					// System.out.println("batchNumber from stock table"+batchNumber);
					// System.out.println("batchNo from goods receive"+batchNo);
					System.out.println("In else Part");

					if (containerName.equals(containerNameInSt) && capacity.equals(capacityInSt) && unit.equals(unitInst)) {
						System.out.println("inside If");

						Double qunty = st.getQuantity();

						Double updatequnty = (double) (qunty + Double.parseDouble(quantity));

						HibernateUtility hbu = HibernateUtility.getInstance();
						Session session = hbu.getHibernateSession();
						Transaction transaction = session.beginTransaction();

						DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
						Date date2 = new Date();

						containerStock updateStock = (containerStock) session.get(containerStock.class,
								new Long(PkStockId));
						updateStock.setUpdateDate(date2);
						updateStock.setContainerName(containerName);
						updateStock.setContainerName(containerNameInSt);
						updateStock.setQuantity(updatequnty);

						session.saveOrUpdate(updateStock);
						transaction.commit();
						break;
					} else {
						// ItemName is Not Exists
						if (j + 1 == stkList2.size()) {

							containerStock newEntry = new containerStock();

							newEntry.setContainerName(containerName);
							;
							newEntry.setCapacity(Long.parseLong(capacity));
							newEntry.setUnit(unit);
							newEntry.setQuantity(Double.parseDouble(quantity));
							System.out.println("for pscking qnty" + quantity);

							StockDao dao2 = new StockDao();
							dao2.registerContainerStock(newEntry);

						}
					}

				}
			}

		}
	}

	public Map getAllDcNumbers(String supplierId) {
		GoodsReceiveDao dao = new GoodsReceiveDao();
		List list = dao.getAllDcNumbersBySuppliers(supplierId);
		Map map = new HashMap();
		for (int i = 0; i < list.size(); i++) {
			Object[] o = (Object[]) list.get(i);
			GetPODetailsForGoodsReceive bean = new GetPODetailsForGoodsReceive();
			System.out.println(Arrays.toString(o));
			bean.setDcNum(o[0].toString());
			bean.setInsertDate(o[1].toString());
			// bean.setTotalAmount((Double)o[1]);
			System.out.println("***************" + o[0]);
			map.put(bean.getDcNum(), bean);

		}
		return map;
	}

	public Map getPODetails(String dcNum, String supplier) {
		System.out.println("In Helper");
		GoodsReceiveDao dao = new GoodsReceiveDao();
		List list = dao.getPODetailsForGoodsReceive(dcNum, supplier);
		System.out.println(list.size());
		Map map1 = new HashMap();

		for (int i = 0; i < list.size(); i++) {
			Object[] o = (Object[]) list.get(i);
			GetPODetailsForDcUpdate bean = new GetPODetailsForDcUpdate();

			bean.setPkPOId((BigInteger) o[0]);
			bean.setProductName((String) o[1]);
			bean.setBuyPrice((BigDecimal) o[2]);
			bean.setSalePrice((BigDecimal) o[3]);
			bean.setQuantity((BigInteger) o[4]);
			bean.setWeight((BigDecimal) o[5]);
			/* bean.setTotalAmount((BigDecimal)o[6]); */
			map1.put(bean.getPkPOId(), bean);
		}
		return map1;

	}

	/*
	 * public List getPurchaseDetailsForSingleDate(HttpServletRequest request,
	 * HttpServletResponse response) {
	 * 
	 * String fDate = request.getParameter("fDate");
	 * System.out.println(fDate+"Single Date");
	 * 
	 * Map<Long,PurchaseDetailsFromGoodsReceive> map = new
	 * HashMap<Long,PurchaseDetailsFromGoodsReceive>();
	 * 
	 * GoodsReceiveDao dao = new GoodsReceiveDao();
	 * List<PurchaseDetailsFromGoodsReceive> expList =
	 * dao.getPurchaseDetailsForSingleDateFromGoodsReceive(fDate);
	 * 
	 * 
	 * return expList;
	 * 
	 * }
	 */

	public List getPurchaseDetailByTwoDate(HttpServletRequest request, HttpServletResponse response) {

		String fDate = request.getParameter("fisDate");
		String tDate = request.getParameter("endDate");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> exp1List = dao.getPurchaseReportsBetweenTwoDates(fDate, tDate);

		return exp1List;

	}
	
	
	public List getContainerPurchaseDetailByTwoDate(HttpServletRequest request, HttpServletResponse response) {

		String fDate = request.getParameter("fisDate");
		String tDate = request.getParameter("endDate");

		Map<Long, ContainerDetailsFromGoodsReceive> map = new HashMap<Long, ContainerDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<ContainerDetailsFromGoodsReceive> exp1List = dao.getContainerPurchaseDetailByTwoDate(fDate, tDate);

		return exp1List;

	}

	public List StockDetailsOfcontainer(HttpServletRequest request, HttpServletResponse response) {

		String containerName = request.getParameter("containerName");
		String capacity = request.getParameter("capacity");
		String unitId = request.getParameter("unitId");

		Map<Long, Packing_InfoBean> map = new HashMap<Long, Packing_InfoBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<Packing_InfoBean> stockList = dao.StockDetailsOfcontainer(containerName, capacity, unitId);

		return stockList;

	}

	public List PackedAndUnpackedStock(HttpServletRequest request, HttpServletResponse response) {

		String productname = request.getParameter("productname");
		String fk_cat_id = request.getParameter("fk_cat_id");
		String fk_subcat_id = request.getParameter("fk_subcat_id");

		Map<Long, ProductDetailsBean> map = new HashMap<Long, ProductDetailsBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<ProductDetailsBean> stockList = dao.PackedAndUnpackedStock(productname, fk_cat_id, fk_subcat_id);

		return stockList;

	}

	public CustomerBean getDetailsById(HttpServletRequest request, HttpServletResponse response) {

		String key = request.getParameter("key");
		System.out.println(key + "barcode");
		Map<Long, CustomerBean> map = new HashMap<Long, CustomerBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<CustomerBean> catList = dao.getAllItemDetails(key);

		CustomerBean cs = null;
		if (catList != null && catList.size() > 0) {
			cs = (CustomerBean) catList.get(0);
		}
		return cs;
	}

	public CustomerBean getPesticideDetailsByBarcode(HttpServletRequest request, HttpServletResponse response) {

		String key = request.getParameter("key");
		System.out.println(key + "barcode");
		Map<Long, CustomerBean> map = new HashMap<Long, CustomerBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<CustomerBean> catList = dao.getPesticideDetailByBarocde(key);

		CustomerBean cs = null;
		if (catList != null && catList.size() > 0) {
			cs = (CustomerBean) catList.get(0);
		}
		return cs;
	}

	// get purchase Item By Bill NoWise
	public Map getAllIetmByBillNo(String bill_no, String supplier) {
		// TODO Auto-generated method stub

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List list = dao.getAllIetmByBillNo(bill_no, supplier);
		System.out.println(list.size());
		Map map1 = new HashMap();

		for (int i = 0; i < list.size(); i++) {
			Object[] o = (Object[]) list.get(i);
			System.out.println("result  -  "+Arrays.toString(o));
			GetPurchaseProduct bean = new GetPurchaseProduct();

			bean.setPk_goods_receive_id((BigInteger) o[0]);
			bean.setSupplier_name((String) o[1]);
			bean.setDc_number((BigInteger) o[2]);
			bean.setProduct_name((String) o[3]);
			bean.setBuy_price((BigDecimal) o[4]);
			bean.setSale_price((BigDecimal) o[5]);
			bean.setWeight((BigDecimal) o[6]);
			bean.setQuantity((Double) o[7]);
			bean.setBatch_no((String) o[8]);
			// bean.setFkCategoryId((BigInteger)o[9]);
			BigInteger big1 = new BigInteger("1");
			BigInteger big2 = new BigInteger("2");
			BigInteger big3 = new BigInteger("3");
			System.out.println("cat Id  ===  " + o[9]);
			if (o[9].equals(big1)) {
				String ferti = "Fertilizer";
				bean.setCatName(ferti);
			}
			if (o[9].equals(big2)) {
				String Pesticide = "Pesticide";
				bean.setCatName(Pesticide);
			}
			if (o[9].equals(big3)) {
				String Seed = "Seed";
				bean.setCatName(Seed);
			}
			bean.setPurchaseDate((Date) o[10]);
			bean.setMrp((BigDecimal) o[11]);
			bean.setTax_percentage((BigDecimal) o[12]);
			bean.setBarcodeNo((BigInteger) o[13]);
			bean.setCompany_Name((String) o[14]);
			// bean.setDupQuantity((Double)o[15]);
			bean.setDupQuantity1((Double) o[15]);
			bean.setCatName((String) o[16]);
			System.out.println("dup quan - "+bean.getDupQuantity1());
			/* bean.setFk_unit_id((BigInteger)o[5]); */
			// bean.setQuantity(0l);
			// System.out.println("***************"+o[0]+"\t"+o[5]);
			map1.put(bean.getPk_goods_receive_id(), bean);
		}
		return map1;
	}

	
	//to purchase Return
			public void returntPurchase(HttpServletRequest request,
					HttpServletResponse response) {
				// TODO Auto-generated method stub
				Integer count = Integer.parseInt(request.getParameter("count"));
				for(int i =0 ; i <count;i++)
				{
					  String bill_no = request.getParameter("bill_no"); 
					  System.out.println("Bill no is : "+bill_no);
					  String pk_goods_receive_id = request.getParameter("pk_goods_receive_id"+i); 
					  String dupQuantity1 = request.getParameter("dupQuantity1"+i); 
					  String product_name = request.getParameter("product_name"+i); 
					  String company_Name = request.getParameter("company_Name"+i); 
					  String weight = request.getParameter("weight"+i); 
					  String quantity1 = request.getParameter("quantity1"+i); 
					  String tax_percentage = request.getParameter("tax_percentage"+i); 
					  String buy_price = request.getParameter("buy_price"+i); 
					  String supplier_name = request.getParameter("supplier_name"+i);
					  String catName = request.getParameter("catName"+i); 
					  String barcodeNo = request.getParameter("barcodeNo"+i); 
					  String mrp = request.getParameter("mrp"+i); 
					  String purchaseDate = request.getParameter("insertDate"+i);
					  
					  System.out.println("quantity1: "+quantity1);
					  System.out.println("dupQuantity1: "+dupQuantity1);
					  System.out.println("pk_goods_receive_id: "+pk_goods_receive_id);
					  System.out.println("bill_no: "+bill_no);
					  System.out.println("product_name: "+product_name);
					  System.out.println("company_Name: "+company_Name);
					  System.out.println("weight: "+weight);
					  System.out.println("tax_percentage: "+tax_percentage);
					  System.out.println("buy_price: "+buy_price);
					  System.out.println("barcodeNo: "+barcodeNo);
					  System.out.println("supplier_name: "+supplier_name);
					  System.out.println("catName: "+catName);
					  
					HibernateUtility hbu=null;
					Session session = null;
					Transaction transaction = null;
					
					try{
						hbu = HibernateUtility.getInstance();
						session = hbu.getHibernateSession();
						transaction = session.beginTransaction();
						List<Object[]> list2  = null;
						List<GoodsReceiveBean> goodsList = null;
						Double grossTotal = 0.0;
						
						Double quantity = (double)(Double.parseDouble(dupQuantity1) -  Double.parseDouble(quantity1));
						System.out.println("after minus qunt : "+ quantity);
	       		        GoodsReceiveBean updateStock = (GoodsReceiveBean) session.get(GoodsReceiveBean.class, new Long(pk_goods_receive_id));
	       		       updateStock.setQuantity(quantity);
	       		        //updateStock.setDupQuantity(quantity);
	       		   // updateStock.setDupQuantity1(quantity);
	       		        session.saveOrUpdate(updateStock);
	       		        
		       		    Query query2 = session.createSQLQuery("SELECT gross_total,bill_number FROM goods_receive WHERE pk_goods_receive_id="+pk_goods_receive_id);
		 		        list2 = query2.list();
		 		       goodsList = new ArrayList<GoodsReceiveBean>();
		 		        for (Object[] objects : list2) {
		 					 grossTotal = Double.parseDouble(objects[0].toString());
		 					
		 				 }
		 		        Double buyPrice = Double.parseDouble(buy_price);
				        Double total = quantity * buyPrice;
				        Double newGrossTotal = grossTotal - total;
				        System.out.println("buyPrice = ="+buyPrice);
				        System.out.println("total = ="+total);
				        System.out.println("newGrossTotal = ="+newGrossTotal);
				        
	       		        updateStock.setReturnAmount(newGrossTotal);
	       		        updateStock.setTotalAfterReturn(total);
	       		        session.saveOrUpdate(updateStock);
	       		        
	       		     PurchaseReturnBean bean = new PurchaseReturnBean(); 
	     			
	   			  //bean.setFk_supplier_id(Long.parseLong(fk_supplier_id));
	   			  bean.setPk_goods_receive_id(Long.parseLong(pk_goods_receive_id));
	   			  bean.setSupplier_name(supplier_name); 
	   			  bean.setProduct_name(product_name);
	   			  bean.setCompany_Name(company_Name); 
	   			  bean.setBatch_no("NA");
	   			  bean.setBill_no(Long.parseLong(bill_no));
	   			  bean.setBarcodeNo(Double.parseDouble(barcodeNo)); 
	   			  bean.setPurchaseDate(purchaseDate);
	   			  bean.setBuy_price(Double.parseDouble(buy_price)); 
	   			  bean.setCatName(catName);
	   			  bean.setDupQuantity1(Double.parseDouble(dupQuantity1));
	   			  bean.setQuantity(Double.parseDouble(quantity1));    
	   			  bean.setTax_percentage(Double.parseDouble(tax_percentage));
	   			  bean.setWeight(Double.parseDouble(weight));
	   			  bean.setMrp(Double.parseDouble(mrp));
	   			SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd"); 
				  Date dateobj = new Date();
				  System.out.println(dateFormat1.format(dateobj)); 
				  bean.setReturnDate(dateobj);
	       		        
				  session.save(bean);
	       		        transaction.commit();
						
						
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
				
			}
	 
	 

	
	/*
	 * public void returntPurchase(HttpServletRequest request, HttpServletResponse
	 * response) { // TODO Auto-generated method stub Integer count =
	 * Integer.parseInt(request.getParameter("count")); for (int i = 0; i <
	 * count;i++) { String billNum = request.getParameter("billNum"); String
	 * fkGoodsReceiveId = request.getParameter("fkGoodsReceiveId" + i); String
	 * dupQuantity1 = request.getParameter("dupQuantity1" + i); //String dupQuantity
	 * = request.getParameter("dupQuantity"); String product_name =
	 * request.getParameter("product_name" + i); String
	 * catName=request.getParameter("catName"+i); String company_Name =
	 * request.getParameter("company_Name" + i); String fk_supplier_id=
	 * request.getParameter("fk_supplier_id"); String supplier =
	 * request.getParameter("supplier"); String weight =
	 * request.getParameter("weight" + i); String quantity =
	 * request.getParameter("quantity" + i); String
	 * mrp=request.getParameter("mrp"+i); String tax_percentage =
	 * request.getParameter("tax_percentage" + i); String buyPrice =
	 * request.getParameter("buyPrice" + i); String purchaseDate =
	 * request.getParameter("insertDate"+i); String batch_no =
	 * request.getParameter("batch_no"+i); String barcodeNo =
	 * request.getParameter("barcodeNo"+i); //String quantity =
	 * request.getParameter("quantity");
	 * 
	 * System.out.println("currnt qunt : " + quantity);
	 * System.out.println("minus qunt : " + dupQuantity1);
	 * 
	 * 
	 * System.out.println("billNo-----------"+billNum);
	 * System.out.println("pkGoodsReceiveId-----------"+fkGoodsReceiveId);
	 * System.out.println("supplier_name-----------"+supplier);
	 * System.out.println("product_name-----------"+product_name);
	 * System.out.println("company_Name-----------"+company_Name);
	 * System.out.println("catName-----------"+catName);
	 * 
	 * System.out.println("batch_no-----------"+batch_no);
	 * System.out.println("weight-----------"+weight);
	 * System.out.println("buy_price-----------"+buyPrice);
	 * 
	 * System.out.println("mrp-----------"+mrp);
	 * System.out.println("tax_percentage-----------"+tax_percentage);
	 * System.out.println("dupQuantity1-----------"+dupQuantity1);
	 * 
	 * System.out.println("barcodeNo-----------"+barcodeNo); HibernateUtility hbu =
	 * null; Session session = null; Transaction transaction = null;
	 * 
	 * try { hbu = HibernateUtility.getInstance(); session =
	 * hbu.getHibernateSession(); transaction = session.beginTransaction();
	 * //List<Object[]> list2 = null; List<GoodsReceiveBean> goodsList = null;
	 * //Double grossTotal = 0.0;
	 * 
	 * //Add purchase return to purchase_return table.. PurchaseReturnBean bean =
	 * new PurchaseReturnBean(); bean.setBillNum(billNum);
	 * //bean.setFk_supplier_id(Long.parseLong(fk_supplier_id));
	 * bean.setFkGoodsReceiveId(Long.parseLong(fkGoodsReceiveId));
	 * bean.setSupplier(Long.parseLong(supplier)); bean.setProductName(productName);
	 * bean.setCompanyName(company_Name); bean.setBatch_no("NA");
	 * bean.setBarcodeNo(Long.parseLong(barcodeNo));
	 * bean.setPurchaseDate(purchaseDate);
	 * bean.setBuyPrice(Double.parseDouble(buyPrice)); //bean.setC
	 * bean.setDupQuantity1(Double.parseDouble(dupQuantity1));
	 * bean.setQuantity(Double.parseDouble(quantity));
	 * bean.setTaxPercentage(taxPercentage); //bean.setFkPesticideBillId(0l);
	 * //bean.setFkSeedBillId(0l); SimpleDateFormat dateFormat1 = new
	 * SimpleDateFormat("yyyy-MM-dd"); Date dateobj = new Date();
	 * System.out.println(dateFormat1.format(dateobj)); bean.setReturnDate(dateobj);
	 * 
	 * session.save(bean); transaction.commit();
	 * 
	 * } catch (RuntimeException e) { try { transaction.rollback(); }
	 * catch(RuntimeException rbe) { Log.error("Couldn't roll back transaction",
	 * rbe); } } finally { hbu.closeSession(session); }
	 * 
	 * }
	 * 
	 * }
	 */
	 

	  
	  
	  
	/*
	 * public void insertPurchaseReturn(HttpServletRequest
	 * request,HttpServletResponse response) throws ParseException {
	 * 
	 * //SimpleDateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
	 * 
	 * int i=0;
	 * 
	 * Integer count = Integer.parseInt(request.getParameter("count")); int flag=0;
	 * for (i = 0; i < count; i++) {
	 * 
	 * String fk_supplier_id=request.getParameter("fk_supplier_id"); String
	 * supplierName=request.getParameter("supplierName"); String
	 * product_name=request.getParameter("product_name"+i); String
	 * company_Name=request.getParameter("company_Name"+i); String
	 * catName=request.getParameter("catName"+i); String
	 * pkPOId=request.getParameter("pkPOId"+i); String
	 * fkCategoryId=request.getParameter("fkCategoryId"+i); String
	 * batch_no=request.getParameter("batch_no"+i); String
	 * weight=request.getParameter("weight"+i); String
	 * buy_price=request.getParameter("buy_price"+i); String
	 * sale_price=request.getParameter("sale_price"+i); String
	 * mrp=request.getParameter("mrp"+i); String
	 * tax_percentage=request.getParameter("tax_percentage"+i);
	 * //System.out.println("tax_percentage-----------"+tax_percentage); String
	 * dupQuantity1=request.getParameter("dupQuantity1"+i);
	 * //System.out.println("QUantity-----------"+dupQuantity1); String
	 * dupQuantity=request.getParameter("dupQuantity"+i); String
	 * taxAmount=request.getParameter("taxAmount"+i);
	 * //System.out.println("taxAmount-----------"+taxAmount);
	 * 
	 * String total=request.getParameter("total"+i); //String
	 * purchaseDate=request.getParameter("purchaseDate"+i); String
	 * barcodeNo=request.getParameter("barcodeNo"+i);
	 * 
	 * 
	 * System.out.println("fk_supplier_id-----------"+fk_supplier_id);
	 * System.out.println("supplierName-----------"+supplierName);
	 * System.out.println("product_name-----------"+product_name);
	 * System.out.println("company_Name-----------"+company_Name);
	 * System.out.println("catName-----------"+catName);
	 * System.out.println("pkPOId-----------"+pkPOId);
	 * System.out.println("fkCategoryId-----------"+fkCategoryId);
	 * System.out.println("batch_no-----------"+batch_no);
	 * System.out.println("weight-----------"+weight);
	 * System.out.println("buy_price-----------"+buy_price);
	 * System.out.println("sale_price-----------"+sale_price);
	 * System.out.println("mrp-----------"+mrp);
	 * System.out.println("tax_percentage-----------"+tax_percentage);
	 * System.out.println("dupQuantity1-----------"+dupQuantity1);
	 * System.out.println("dupQuantity-----------"+dupQuantity);
	 * System.out.println("taxAmount-----------"+taxAmount);
	 * System.out.println("total-----------"+total);
	 * System.out.println("barcodeNo-----------"+barcodeNo);
	 * 
	 * 
	 * 
	 * 
	 * purchaseReturnBean bean=new purchaseReturnBean();
	 * bean.setFk_supplier_id(Long.parseLong(fk_supplier_id));
	 * bean.setSupplier(supplierName);
	 * 
	 * bean.setProduct_name(product_name); bean.setCompany_Name(company_Name);
	 * bean.setCatName(catName); bean.setPkPOId(Long.parseLong(pkPOId));
	 * bean.setFkCategoryId(Long.parseLong(fkCategoryId));
	 * bean.setBatch_no(batch_no); bean.setWeight(Double.parseDouble(weight));
	 * bean.setBuy_price(Double.parseDouble(buy_price));
	 * bean.setSale_price(Double.parseDouble(sale_price));
	 * bean.setMrp(Double.parseDouble(mrp));
	 * bean.setTax_percentage(Double.parseDouble(tax_percentage));
	 * bean.setDupQuantity1(Double.parseDouble(dupQuantity1));
	 * 
	 * 
	 * 
	 * if(dupQuantity==0) { bean.setdupQuantity(0d);
	 * 
	 * } else { bean.setDupQuantity(Double.parseDouble(dupQuantity)); }
	 * 
	 * 
	 * 
	 * bean.setDupQuantity(Double.parseDouble(dupQuantity));
	 * bean.setTaxAmount(Double.parseDouble(taxAmount));
	 * bean.setTotal(Double.parseDouble(total));
	 * //bean.setPurchaseDate(purchaseDate);
	 * bean.setBarcodeNo(Long.parseLong(barcodeNo));
	 * 
	 * 
	 * String purchaseDate=request.getParameter("purchaseDate"+i);
	 * System.out.println("purchaseDate-----------"+purchaseDate);
	 * 
	 * 
	 * SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd"); Date
	 * purchaseDate1= null;
	 * 
	 * try { purchaseDate1 = format.parse(purchaseDate);
	 * bean.setPurchaseDate(purchaseDate1); } catch (ParseException e1) { // TODO
	 * Auto-generated catch block e1.printStackTrace(); }
	 * //bean.setPurchaseDate(purchaseDate1);
	 * 
	 * purchaseReturnDao dao=new purchaseReturnDao();
	 * if(Double.parseDouble(dupQuantity)>0) { dao.insertPurchaseReturn(bean); }
	 * 
	 * }
	 * 
	 * }
	 */

	public void returntMinusFromStockPurchase(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		Integer count = Integer.parseInt(request.getParameter("count"));
		System.out.println("in purchase return stock update method -  count - "+count);
		for (int i = 0; i < count; i++) {
			String pkGoodsReceiveId = request.getParameter("pk_goods_receive_id" + i);
			String QuantityToReturn = request.getParameter("QuantityToReturn" + i);
			String product_name = request.getParameter("product_name" + i);
			String company_Name = request.getParameter("company_Name" + i);
			String weight = request.getParameter("weight" + i);
			// String duplicateQuantity = request.getParameter("duplicateQuantity"+i);
			// System.out.println("currnt qunt : "+ duplicateQuantity);
			System.out.println("  quntity received frm ui : " + QuantityToReturn);
			System.out.println("product_name : " + product_name);
			System.out.println(" company_Name : " + company_Name);
			System.out.println(" weight : " + weight);

			HibernateUtility hbu1 = null;
			Session session1 = null;
			Transaction transaction1 = null;

			try {
				Long PkStockId;
				Double quantity;
				Double unpcked;
				hbu1 = HibernateUtility.getInstance();
				session1 = hbu1.getHibernateSession();
				transaction1 = session1.beginTransaction();
				//Query query = session1.createSQLQuery("select PkStockId , Quantity from stock_detail where ProductName=:product_name AND CompanyName=:company_Name");
				Query query = session1.createSQLQuery("select PkStockId , Quantity,unpacked_Quantity from stock_detail where ProductName=:product_name AND CompanyName=:company_Name");
				query.setParameter("product_name", product_name);
				query.setParameter("company_Name", company_Name);

				List<Object[]> list = query.list();

				for (Object[] object : list) {
					System.out.println("result from stock while purchase return - "+Arrays.toString(object));
					PkStockId = Long.parseLong(object[0].toString());
					quantity = Double.parseDouble(object[1].toString());
					unpcked=Double.parseDouble(object[2].toString());
					System.out.println("PkStockId --  " + PkStockId);
					System.out.println("quantity got frm stock --- " + quantity);

					Double updatequnty = (double) (quantity - Double.parseDouble(QuantityToReturn));
					System.out.println("updatequnty to stock --  " + updatequnty);

					Stock Stock = (Stock) session1.load(Stock.class, new Long(PkStockId));
					if(unpcked>updatequnty)
					{
						Stock.setUnpackedQuantity(updatequnty);
					}
					Stock.setQuantity(updatequnty);
					session1.saveOrUpdate(Stock);
					transaction1.commit();
					System.out.println("Success ");
				}

			} catch (RuntimeException e) {
				try {
					transaction1.rollback();
				} catch (RuntimeException rbe) {
					Log.error("Couldn't roll back tranaction", rbe);
				}
			} finally {
				hbu1.closeSession(session1);
			}
		}

	}

	/*
	 * //fetching pro details from goods receive for ferti bill public CustomerBean
	 * getDetailsByProNameForzFertiBill( HttpServletRequest request,
	 * HttpServletResponse response) {
	 * 
	 * 
	 * String proName =request.getParameter("proName"); String company
	 * =request.getParameter("company"); String weight
	 * =request.getParameter("weight");
	 * 
	 * System.out.println(proName+"pro name in gr helper");
	 * 
	 * Map<Long,CustomerBean> map = new HashMap<Long,CustomerBean>();
	 * 
	 * GoodsReceiveDao dao = new GoodsReceiveDao(); List<CustomerBean> catList =
	 * dao.getAllProductDetailsForFrtiBillAsPerProductName(proName,company,weight);
	 * 
	 * CustomerBean cs = null; if(catList!= null && catList.size() > 0 ) { cs =
	 * (CustomerBean)catList.get(0); } return cs;
	 * 
	 * }
	 */

	// fetching pro details from goods receive for ferti bill
	public CustomerBean getDetailsByProNameForzFertiBill(HttpServletRequest request, HttpServletResponse response) {

		String proName = request.getParameter("proName");
		String company = request.getParameter("company");
		String weight = request.getParameter("weight");

		System.out.println(proName + "pro name in gr helper");

		Map<Long, CustomerBean> map = new HashMap<Long, CustomerBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<CustomerBean> catList = dao.getAllProductDetailsForFrtiBillAsPerProductName(proName, company, weight);

		CustomerBean cs = null;
		if (catList != null && catList.size() > 0) {
			cs = (CustomerBean) catList.get(0);
		}
		return cs;

	}

	// fetching product detail as per batch for seed bill
	public CustomerBean getDetailsByBatchNadStockForSeedBill(HttpServletRequest request, HttpServletResponse response) {

		String batchNum = request.getParameter("batchNum");
		String stock = request.getParameter("stock");
		System.out.println(" batchNum=== == =in helper" + batchNum);
		System.out.println(" stock=== == =in helper" + stock);
		Map<Long, CustomerBean> map = new HashMap<Long, CustomerBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<CustomerBean> catList = dao.getAllProductDetailsForSeedBillAsPerBatchAndStock(batchNum, stock);

		CustomerBean cs = null;
		if (catList != null && catList.size() > 0) {
			cs = (CustomerBean) catList.get(0);
		}
		return cs;

	}

	public CustomerBean getProductDetailsForFertiBill(HttpServletRequest request, HttpServletResponse response) {

		String proName = request.getParameter("proName");
		String company = request.getParameter("company");
		String batchNum = request.getParameter("batchNum");
		String catId = request.getParameter("catId");
		String subCatId = request.getParameter("subCatId");

		System.out.println(proName + "-  pro name in gr helper");
		System.out.println(catId + " -  catId in gr helper");
		System.out.println(subCatId + " -  subCatId in gr helper");
		System.out.println(batchNum + " -  batchNum in gr helper");
		System.out.println(company + " -  company in gr helper");
		Map<Long, CustomerBean> map = new HashMap<Long, CustomerBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<CustomerBean> catList = dao.getAllProductDetailsForFrtiBillAsPerProductName1(proName, company, batchNum,
				catId, subCatId);

		CustomerBean cs = null;
		if (catList != null && catList.size() > 0) {
			cs = (CustomerBean) catList.get(0);
		}
		System.out.println(cs);
		return cs;

	}

	public CustomerBean getProductDetailsForSeedBill(HttpServletRequest request, HttpServletResponse response) {

		String proName = request.getParameter("proName");
		String company = request.getParameter("company");
		String weight = request.getParameter("weight");
		String batchNum = request.getParameter("batchNum");

		System.out.println(proName + "pro name in gr helper");

		Map<Long, CustomerBean> map = new HashMap<Long, CustomerBean>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<CustomerBean> catList = dao.getAllProductDetailsForSeedBillAsPerProductName1(proName, company, weight,
				batchNum);

		CustomerBean cs = null;
		if (catList != null && catList.size() > 0) {
			cs = (CustomerBean) catList.get(0);
		}
		return cs;

	}

	public List getSaleDetailsAsPerCategoryForSingleDate(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("cat");
		String fDate = request.getParameter("fDate");
		System.out.println(cat + "Category in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerCategoryForSingleDate(cat, fDate);

		return expList;

	}

	public List getSaleDetailsPerPaymentMode(HttpServletRequest request, HttpServletResponse response) {

		String paymentMode = request.getParameter("paymentMode");
		String fk_cat_id = request.getParameter("fk_cat_id");
		System.out.println(paymentMode + "paymentMode in Helper");
		System.out.println(fk_cat_id + "fk_cat_id in Helper");
		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerPaymentMode(paymentMode, fk_cat_id);
		return expList;
	}

	public List getSaleDetailsPerPaymentModeGorSingleDate(HttpServletRequest request, HttpServletResponse response) {

		String singleDate = request.getParameter("singleDate");
		String fk_cat_id = request.getParameter("fk_cat_id");
		System.out.println(singleDate + "singleDate in Helper");
		System.out.println(fk_cat_id + "fk_cat_id in Helper");
		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerPaymentModeForSingleDate(singleDate, fk_cat_id);
		return expList;
	}

	public List getSaleDetailsPerGSTPercentage(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("fk_cat_id");
		String fDate = request.getParameter("startDate");
		String sDate = request.getParameter("endDate");
		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsGST(cat, fDate, sDate);
		return expList;
	}

	public List getSaleDetailsAsPerCategoryBetTwoDates(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("fk_cat_id");
		String fDate = request.getParameter("fisDate");
		String sDate = request.getParameter("endDate");
		System.out.println(cat + "Category in Helper");
		System.out.println(fDate + "fDate in Helper");
		System.out.println(sDate + "sDate in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerCategoryBetweeenTwoDates(cat, fDate, sDate);

		return expList;

	}

	public List getSaleDetailsAsPerShopBetTwoDates(HttpServletRequest request, HttpServletResponse response) {

		String shop = request.getParameter("shop");
		String fDate = request.getParameter("fDate");
		String sDate = request.getParameter("sDate");
		System.out.println(shop + "Category in Helper");
		System.out.println(fDate + "fDate in Helper");
		System.out.println(sDate + "sDate in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerShopBetweeenTwoDates(shop, fDate, sDate);

		return expList;

	}

	public List saleReportBetweenToId(HttpServletRequest request, HttpServletResponse response) {

		String cust1 = request.getParameter("fk_cust_id");
		String cust2 = request.getParameter("fk_cust_id1");
		System.out.println(cust1 + "Category in Helper");
		System.out.println(cust2 + "fDate in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.saleReportBetweenToId(cust1, cust2);

		return expList;

	}

	public List getSaleDetailsAsPerProNameForSingleDate(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("cat");
		String productName = request.getParameter("product");
		String fDate = request.getParameter("fDate");
		System.out.println(cat + "Category in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerProductNameForSingleDate(cat, fDate, productName);

		return expList;

	}

	public List getStockDetailsAsPerCategory(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("cat");
		System.out.println(cat + "Category in Helper");

		Map<Long, StockDetail> map = new HashMap<Long, StockDetail>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<StockDetail> stockList = dao.getStockDetailsForReportAsPerCategory(cat);

		System.out.println("@@@ stock report Helper :: " + stockList);

		return stockList;

	}

	public List getStockDetailsAsCompanyName(HttpServletRequest request, HttpServletResponse response) {
		String companyName = request.getParameter("companyName");

		Map<Long, StockDetail> map = new HashMap<Long, StockDetail>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<StockDetail> stockList = dao.getStockDetailsAsPerCompanyName(companyName);

		return stockList;

	}

	public List getPurchaseDetailsForSingleDate(HttpServletRequest request, HttpServletResponse response) {

		String fDate = request.getParameter("fDate");
		System.out.println(fDate + "Single Date");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.getPurchaseDetailsForSingleDateFromGoodsReceive(fDate);

		return expList;

	}

	public List getPurchaseDetailsAsPerProduct(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("cat");
		System.out.println("hi this is kishor in helper-----" + cat);
		String productName = request.getParameter("proName");
		System.out.println("hi this is kishor ------" + productName);
		/*
		 * String company = request.getParameter("company"); String weight =
		 * request.getParameter("weight");
		 */

		// System.out.println(product+"product in Helper");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.getPurchaseDetailsAsPerProduct(cat, productName);
		System.out.println("this is  harshad" + expList.size());

		return expList;

	}

	public List getPurchaseDetailsAsPerSupplierName(HttpServletRequest request, HttpServletResponse response) {

		String supplier = request.getParameter("supplier");
		System.out.println(supplier + "Supplier in Helper");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.getPurchaseDetailsForSupplier(supplier);

		return expList;

	}

	public List getPurchaseDetailsAsPerShopName(HttpServletRequest request, HttpServletResponse response) {

		String shop = request.getParameter("shop");
		String fisDate = request.getParameter("fisDate");
		String endDate = request.getParameter("endDate");
		System.out.println(shop + "Supplier in Helper");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.getPurchaseDetailsForShop(shop, fisDate, endDate);

		return expList;

	}

	public List getPurchaseDetailsAsPerCategory(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("cat");
		System.out.println(cat + "Category in Helper");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.getPurchaseDetailsForCategory(cat);

		return expList;

	}

	public List getSaleDetailsAsPerProductNameBetTwoDates(HttpServletRequest request, HttpServletResponse response) {

		String cat = request.getParameter("cat");
		String fDate = request.getParameter("fDate");
		String sDate = request.getParameter("sDate");
		String product = request.getParameter("product");

		System.out.println(cat + "Category in Helper");
		System.out.println(fDate + "fDate in Helper");
		System.out.println(sDate + "sDate in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerProductNamesBetweeenTwoDates(cat, fDate, sDate, product);

		return expList;

	}

	public List getSaleDetailsAsPerSup(HttpServletRequest request, HttpServletResponse response) {

		String fkSupplierId = request.getParameter("fkSupplierId");
		System.out.println(fkSupplierId + "fkSupplierId in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerSupplierName(fkSupplierId);

		return expList;

	}

	public List getTaxDetailsFromPurchaseForSingleDateAsPerCategory(HttpServletRequest request,
			HttpServletResponse response) {

		String cat = request.getParameter("cat");
		String fDate = request.getParameter("fDate");
		String sDate = request.getParameter("sDate");
		System.out.println(cat + "Category in Helper");
		System.out.println(fDate + "fDate in Helper");
		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.geTaxDetailsAsPerCategoryForSingleDate(cat, fDate, sDate);
		return expList;

	}

	public List getStockDetailsAsProductName(HttpServletRequest request, HttpServletResponse response) {
		String proName = request.getParameter("proName");
		String company = request.getParameter("company");
		/* String weight = request.getParameter("weight"); */

		Map<Long, StockDetail> map = new HashMap<Long, StockDetail>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<StockDetail> stockList = dao.getStockDetailsAsPerProductName(proName, company);

		return stockList;

	}

	public List getSaleDetailsPerPaymentModeForTwoDate(HttpServletRequest request, HttpServletResponse response) {

		String singleDate = request.getParameter("singleDate");
		String secondDate = request.getParameter("secondDate");
		String fk_cat_id = request.getParameter("fk_cat_id");
		System.out.println(singleDate + "singleDate in Helper");
		System.out.println(fk_cat_id + "fk_cat_id in Helper");
		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.getSaleDetailsAsPerPaymentModeForTwoDate(singleDate, fk_cat_id, secondDate);
		return expList;

	}

	public Map getSubCatDetails(String fk_cat_id) {

		int count = 0;
		System.out.println("IN HELPER");
		/*
		 * String fk_cat_id = request.getParameter("fk_cat_id");
		 * 
		 * System.out.println("=== == ==="+fk_cat_id);
		 * 
		 * 
		 * SubCategoryDetailsBean scdb = new SubCategoryDetailsBean();
		 * 
		 * scdb.setFk_cat_id(Long.parseLong(fk_cat_id));
		 */

		ProductDetailsDao cdd = new ProductDetailsDao();
		List list = cdd.getAllSubCategory(fk_cat_id);

		System.out.println("list ======" + list.size());
		Map map = new HashMap();
		for (int i = 0; i < list.size(); i++) {
			System.out.println("IN HELPER");
			Object[] o = (Object[]) list.get(i);
			SubCategoryDetailsBean bean = new SubCategoryDetailsBean();
			System.out.println(Arrays.toString(o));
			bean.setSubcatId(Long.parseLong(o[0].toString()));
			bean.setSubcategoryName(o[1].toString());
			// bean.setTotalAmount((Double)o[1]);
			System.out.println("***************" + o[0]);
			map.put(count, bean);
			count++;
		}
		return map;

	}

	public Map getProNameDetails(String fk_cat_id, String fk_subCat_id) {

		int count = 0;
		System.out.println("IN HELPER");
		GoodsReceiveDao cdd = new GoodsReceiveDao();
		List list = cdd.getProductName(fk_cat_id, fk_subCat_id);

		System.out.println("list ======" + list.size());
		Map map = new HashMap();
		for (int i = 0; i < list.size(); i++) {
			System.out.println("IN HELPER");
			Object[] o = (Object[]) list.get(i);
			ProductDetailsBean bean = new ProductDetailsBean();
			System.out.println(Arrays.toString(o));
			bean.setProdctId(Long.parseLong(o[0].toString()));
			bean.setProductName(o[1].toString());
			// bean.setTotalAmount((Double)o[1]);
			System.out.println("***************" + o[0]);
			map.put(count, bean);
			count++;
		}
		return map;

	}

	public List getPurchaseDetailByGST(HttpServletRequest request, HttpServletResponse response) {
		String fDate = request.getParameter("gstFisDate");
		String tDate = request.getParameter("gstEndDate");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> exp1List = dao.getPurchaseReportsASPerGST(fDate, tDate);

		return exp1List;

	}

	public List getPurchaseReturnDetailsAsPerSupplierName(HttpServletRequest request, HttpServletResponse response) {
		String supplier = request.getParameter("supplier");

		System.out.println(supplier + "= = = Supplier in Helper");

		Map<Long, PurchaseDetailsFromGoodsReceive> map = new HashMap<Long, PurchaseDetailsFromGoodsReceive>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<PurchaseDetailsFromGoodsReceive> expList = dao.getPurchaseReturnDetailsForSupplier(supplier);

		return expList;

	}

//GST Sale Summary 
	public List gstSummaryReportsBetweenTwoDates(HttpServletRequest request, HttpServletResponse response) {

		String fDate = request.getParameter("gstFisDate1");
		String sDate = request.getParameter("gstEndDate1");

		System.out.println(fDate + "fDate in Helper");
		System.out.println(sDate + "sDate in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.gstSummaryReportsBetweenTwoDates(fDate, sDate);

		return expList;

	}

//GST Purchase Summary 
	public List gstPurchaseSummaryReportsBetweenTwoDates(HttpServletRequest request, HttpServletResponse response) {

		String fDate = request.getParameter("gstFisDate1");
		String sDate = request.getParameter("gstEndDate1");

		System.out.println(fDate + "fDate in Helper");
		System.out.println(sDate + "sDate in Helper");

		Map<Long, SaleReports> map = new HashMap<Long, SaleReports>();

		GoodsReceiveDao dao = new GoodsReceiveDao();
		List<SaleReports> expList = dao.gstPurchaseSummaryReportsBetweenTwoDates(fDate, sDate);

		return expList;

	}

}
