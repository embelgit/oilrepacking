<%-- <%@page import="org.apache.batik.script.Window"%> --%>
<%@page import="com.Fertilizer.utility.NumToWord"%>
<%@page import="com.itextpdf.text.log.SysoLogger"%>
<%@page import="java.text.DecimalFormat"%>
<%@page import="java.math.BigDecimal"%>
<%@page import="com.itextpdf.text.Rectangle"%>
<%@page import="com.itextpdf.text.BaseColor"%>
<%@page import="com.itextpdf.text.Font"%>
<%@page import="com.itextpdf.text.FontFactory"%>
<%@page import="java.util.Formatter"%>
<%@page import="javax.sound.midi.Soundbank"%>
<%@page import="com.itextpdf.text.pdf.codec.Base64.OutputStream"%>
<%@page import="java.util.Date"%>
<%@page import="java.io.IOException"%>
<%@page import="com.itextpdf.text.DocumentException"%>
<%@page import="com.itextpdf.text.Paragraph"%>
<%@page import="com.itextpdf.text.pdf.PdfWriter"%>
<%@page import="com.itextpdf.text.Document"%>

<%@ page trimDirectiveWhitespaces="true"%>

<%@page import="java.util.Date"%>
<%@page import="java.io.IOException"%>
<%@page import="com.itextpdf.text.DocumentException"%>
<%@page import="com.itextpdf.text.Paragraph"%>
<%@page import="com.itextpdf.text.pdf.PdfWriter"%>
<%@page import="com.itextpdf.text.Document"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>

<%@page import="java.awt.Desktop"%>
<%@page import="java.io.File"%>
<%@page import="com.itextpdf.text.pdf.PdfPCell"%>
<%@page import="com.itextpdf.text.pdf.PdfPTable"%>
<%@page import="com.itextpdf.text.Paragraph"%>
<%@page import="java.io.FileOutputStream"%>
<%@page import="com.itextpdf.text.PageSize"%>
<%@page import="com.itextpdf.text.pdf.PdfWriter"%>
<%@page import="java.util.List"%>

<%@ page import="com.itextpdf.text.Element"%>
<%--  <%@page import="com.itextpdf.text.log.SysoLogger"%> --%>
<%@page import="java.util.List"%>

<%@page import="java.util.TimeZone"%>
<%@page import="java.text.SimpleDateFormat"%>

<%@page import="com.itextpdf.text.Phrase"%>
<%@page import="java.util.Calendar"%>
<%@page import="java.util.Date"%>
<%@page import="com.itextpdf.text.Image"%>
<%@page import="com.itextpdf.text.pdf.PdfContentByte"%>
<%@page import="com.itextpdf.text.Image"%>
<%@page import="com.itextpdf.text.pdf.PdfContentByte"%>
<%@page import="com.itextpdf.text.pdf.PdfGState"%>

<%
	response.setContentType("application/pdf");
	 Long billno = (Long) session.getAttribute("fertilizerBillNo");
	 String creditCustomerName = (String) session.getAttribute("creditCustomerName"); 
 
	int a = 1;
	double sum = 0.0;
	double tax = 0.0;
	String taxVal = "";
	double swachaTax = 0.0;
	double groTOT = 0.0;
	String xx1 = "";
	String ShopName = "";
	double iGST = 0d;
	double GST = 0d;
	double ShopId = 0d;
	double gstTotal =0d;
	double igstTotal =0d;
	double gstTotal1 =0d;
	double igstTotal1 =0d;
	double discount=0d;
	double intialPay=0d;
	double sale=0d;
	double tota=0d;
	/* Double discount=0d; */
	String grossT = "";

	Connection conn = null;

	try {

		// step 1
		Document document = new Document();

		// step 2

		PdfWriter.getInstance(document, response.getOutputStream());

		// step 3
		document.open();

		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/oil", "root", "system");
		Statement stmt = conn.createStatement();

		//ResultSet rs = stmt.executeQuery("select product_name,village,sale_price,total_amount from fertilizer_bill WHERE customerBill=" + billno);

		//ResultSet rs = stmt.executeQuery("select fertilizer_bill.product_name,village, manufacturing_company, fertilizer_bill.weight, quantity, fertilizer_bill.sale_price, total_amount, total_amount,expenses,gross_total from fertilizer_bill left join product_details on fertilizer_bill.fk_product_id = product_details.pk_product_id where fertilizer_bill.customerBill =" + 166);
		ResultSet rs = stmt.executeQuery("select customer_name, fertilizer_billing.product_name, fertilizer_billing.village, fertilizer_billing.company, fertilizer_billing.weight, fertilizer_billing.quantity, fertilizer_billing.Without_Tax_Rate, fertilizer_billing.total_per_product, fertilizer_billing.total_all_product, fertilizer_billing.hamali_expense, fertilizer_billing.bal_After_initial_Payment , fertilizer_billing.tax_percentage,fertilizer_billing.hsn,fertilizer_billing.igstPercentage,fertilizer_billing.fk_shop_id,s.shop_name,fertilizer_billing.Discount_amount ,fertilizer_billing.sale_price,fertilizer_billing.initial_Payment from fertilizer_billing left join shop_details s on fk_shop_id=pk_shop_id where bill_no ="+billno);
	
		
		rs.first();
		
		System.out.println("Query Execute");
		Date d1 = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MMM-yyyy");
		SimpleDateFormat sdf1 = new SimpleDateFormat("E");
		SimpleDateFormat sdf2 = new SimpleDateFormat("hh:mm:ss  ");
		sdf2.setTimeZone(TimeZone.getTimeZone("IST"));

		Date billDate = new Date();
		SimpleDateFormat dateFormater = new SimpleDateFormat("dd-MM-yyyy");
		String StrBillDate = dateFormater.format(billDate);

		String stdver1 = (String) sdf.format(d1);
		//String day = sdf1.format(d1.getDate());
		//String Time = sdf2.format(d1.getTime());
		String dtfinl = stdver1;

		DecimalFormat df = new DecimalFormat("#.00");

		Font font16Bold = new Font(Font.FontFamily.TIMES_ROMAN, 16, Font.BOLD, BaseColor.RED);
		Font font15Bold = new Font(Font.FontFamily.TIMES_ROMAN, 15, Font.BOLD, BaseColor.BLACK);
		Font font15BoldUnderline = new Font(Font.FontFamily.TIMES_ROMAN, 15, Font.BOLD | Font.UNDERLINE, BaseColor.BLACK);
		Font font12 = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.BOLD, BaseColor.BLACK);
		Font font12NoBold = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.NORMAL, BaseColor.BLACK);
		Font font12BoldUnderline = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.BOLD | Font.UNDERLINE, BaseColor.BLACK);
		Font font13 = new Font(Font.FontFamily.TIMES_ROMAN, 13, Font.BOLD, BaseColor.BLACK);

		Font font13Bold = new Font(Font.FontFamily.TIMES_ROMAN, 13, Font.BOLD, BaseColor.BLACK);

		Font Normalfont11 = new Font(Font.FontFamily.TIMES_ROMAN, 11, Font.NORMAL, BaseColor.BLACK);
		Font Normalfont13 = new Font(Font.FontFamily.TIMES_ROMAN, 13, Font.NORMAL, BaseColor.BLACK);
		Font Normalfont14 = new Font(Font.FontFamily.TIMES_ROMAN, 14, Font.NORMAL, BaseColor.BLACK);
		Font ufont14 = new Font(Font.FontFamily.TIMES_ROMAN, 14, Font.UNDERLINE, BaseColor.BLACK);

		// step 4

		PdfPTable table = new PdfPTable(3);
		table.setWidthPercentage(100);

		float[] columnWidths = { 0.2f, 0.3f, 0.2f };
		table.setWidths(columnWidths);

		PdfPCell table_cell;

		
			 ShopId = rs.getDouble("fk_shop_id");
			
		
			 if(ShopId == 1){
					table_cell = new PdfPCell(new Phrase("Bill Cash/Credit Memorandum", Normalfont11));
					table_cell.setBorder(table_cell.NO_BORDER);
					table.addCell(table_cell);

					table_cell = new PdfPCell(new Phrase("|| SHREE ||"));
					table_cell.setBorder(table_cell.NO_BORDER);
					table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
					table.addCell(table_cell);

					table_cell = new PdfPCell(new Phrase("GST No. 27CMEPSI695HIZL", Normalfont11));
					table_cell.setBorder(table_cell.NO_BORDER);
					table.addCell(table_cell);
					}
					else{
						table_cell = new PdfPCell(new Phrase("Bill Cash/Credit Memorandum", Normalfont11));
						table_cell.setBorder(table_cell.NO_BORDER);
						table.addCell(table_cell);

						table_cell = new PdfPCell(new Phrase("|| SHREE ||"));
						table_cell.setBorder(table_cell.NO_BORDER);
						table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
						table.addCell(table_cell);

						table_cell = new PdfPCell(new Phrase("", Normalfont11));
						table_cell.setBorder(table_cell.NO_BORDER);
						table.addCell(table_cell);
					}
						
					//-----------------
			        if(ShopId == 1){
					table_cell = new PdfPCell(new Phrase("MVAT TIN No. 27920221378", Normalfont11));
					table_cell.setBorder(table_cell.NO_BORDER);
					table.addCell(table_cell);

					table_cell = new PdfPCell(new Phrase("Tax Invoice", font15Bold));
					table_cell.setBorder(table_cell.NO_BORDER);
					table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
					table.addCell(table_cell);

					table_cell = new PdfPCell(new Phrase("Pan No. CMEPSI695H", Normalfont11));
					table_cell.setBorder(table_cell.NO_BORDER);
					table.addCell(table_cell);
			        }
			        else{
			        	table_cell = new PdfPCell(new Phrase("", Normalfont11));
			    		table_cell.setBorder(table_cell.NO_BORDER);
			    		table.addCell(table_cell);

			    		table_cell = new PdfPCell(new Phrase("Tax Invoice", font15Bold));
			    		table_cell.setBorder(table_cell.NO_BORDER);
			    		table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
			    		table.addCell(table_cell);

			    		table_cell = new PdfPCell(new Phrase("", Normalfont11));
			    		table_cell.setBorder(table_cell.NO_BORDER);
			    		table.addCell(table_cell);
			        }
					//--------
			        if(ShopId == 1){
					table_cell = new PdfPCell(new Phrase(""));
					table_cell.setBorder(table_cell.NO_BORDER);
					table.addCell(table_cell);

					table_cell = new PdfPCell(new Phrase("SANTOSH INDUSTRIES", font15Bold));
					table_cell.setBorder(table_cell.NO_BORDER);
					table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
					table.addCell(table_cell);

					table_cell = new PdfPCell(new Phrase(""));
					table_cell.setBorder(table_cell.NO_BORDER);
					table.addCell(table_cell);
			        }
			        else {
			        	
			        	table_cell = new PdfPCell(new Phrase(""));
			    		table_cell.setBorder(table_cell.NO_BORDER);
			    		table.addCell(table_cell);

			    		table_cell = new PdfPCell(new Phrase("TIRUMALA TRADING", font15Bold));
			    		table_cell.setBorder(table_cell.NO_BORDER);
			    		table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
			    		table.addCell(table_cell);

			    		table_cell = new PdfPCell(new Phrase(""));
			    		table_cell.setBorder(table_cell.NO_BORDER);
			    		table.addCell(table_cell);
			        }
			//-------------

			table_cell = new PdfPCell(new Phrase("Bill No: " + billno));
			table_cell.setBorder(Rectangle.BOTTOM);
			table_cell.setPaddingBottom(20f);
			table.addCell(table_cell);

			table_cell = new PdfPCell(new Phrase("Main Road,MIDC,Nanded, Maharashtra. 431603", Normalfont14));
			table_cell.setBorder(Rectangle.BOTTOM);
			table_cell.setHorizontalAlignment(Element.ALIGN_CENTER);
			table_cell.setPaddingBottom(20f);
			table.addCell(table_cell);

			table_cell = new PdfPCell(new Phrase(""));
			table_cell.setBorder(Rectangle.BOTTOM);
			table_cell.setPaddingBottom(20f);
			table.addCell(table_cell);

		document.add(table);

		/* table for customer name, village and date */

		PdfPTable smallTable = new PdfPTable(3);
		smallTable.setWidthPercentage(100);

		float[] smallTablecolumnWidths = { 0.4f, 0.2f, 0.2f };
		smallTable.setWidths(smallTablecolumnWidths);

		PdfPCell table_cell2;
		
		String custName;
		
		String cn = String.valueOf(rs.getString("customer_name"));
		
		if(cn.equals("N/A")){
			custName = creditCustomerName;
		}else
		{
			custName = cn;
		}
		
			

		table_cell2 = new PdfPCell(new Phrase("Mr. " +custName , font12));
		table_cell2.setBorder(table_cell.NO_BORDER);
		smallTable.addCell(table_cell2);

		

		/* String expenses = String.valueOf(rs.getString("transportation_expense")); */
		String HamaliExpence = String.valueOf(rs.getString("hamali_expense"));
		discount = Double.valueOf(rs.getDouble("Discount_amount"));
		String gross_total = String.valueOf(rs.getString("bal_After_initial_Payment"));

		table_cell2 = new PdfPCell(new Phrase("Village: " + rs.getString("village")));
		table_cell2.setBorder(table_cell.NO_BORDER);
		table_cell2.setHorizontalAlignment(Element.ALIGN_RIGHT);
		smallTable.addCell(table_cell2);

		table_cell2 = new PdfPCell(new Phrase("Date: " + StrBillDate));
		table_cell2.setBorder(table_cell.NO_BORDER);
		table_cell2.setHorizontalAlignment(Element.ALIGN_RIGHT);
		smallTable.addCell(table_cell2);

		document.add(smallTable);
		document.add(new Paragraph(" "));
		//Middle table

		PdfPTable table3 = new PdfPTable(10);
		table3.setWidthPercentage(100);

		float[] columnWidths3 = { 0.3f, 0.3f,0.2f, 0.2f, 0.1f, 0.2f, 0.2f, 0.2f,0.2f, 0.3f };
		table3.setWidths(columnWidths3);

		PdfPCell table_cell3;

		table_cell3 = new PdfPCell(new Phrase("Goods Details", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("Company", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("HSN", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("Pkg(Kg)", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("Qty", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("Rate", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("CGST %", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		
		table_cell3 = new PdfPCell(new Phrase("SGST %", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("IGST %", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("Amount", font12));
		table_cell3.setBorderWidth(1f);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(4f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		rs.beforeFirst();
		
		//ResultSet rs = stmt.executeQuery("select fertilizer_bill.product_name,village, manufacturing_company, batch_no, expiry_date, fertilizer_bill.weight, quantity, fertilizer_bill.sale_price, total_amount, total_amount from fertilizer_bill left join product_details on fertilizer_bill.fk_product_id = product_details.pk_product_id where fertilizer_bill.customerBill =" + billno);
		while (rs.next()) {
			
			ShopId = rs.getDouble("fk_shop_id"); 
			ShopName = rs.getString("shop_name");
			
			String product_name = rs.getString("product_name");
			table_cell3 = new PdfPCell(new Phrase(product_name, font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);

			String manufacturing_company = rs.getString("company");
			table_cell3 = new PdfPCell(new Phrase(manufacturing_company, font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			String hsnNumber = rs.getString("hsn");
			table_cell3 = new PdfPCell(new Phrase(hsnNumber, font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);

			double weight = rs.getDouble("weight");
			table_cell3 = new PdfPCell(new Phrase(String.valueOf(weight), font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);

			int quantity = rs.getInt("quantity");
			table_cell3 = new PdfPCell(new Phrase(String.valueOf(quantity), font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			BigDecimal salePrice = rs.getBigDecimal("Without_Tax_Rate", 2);
			
			double Without_Tax_Rate = rs.getDouble("Without_Tax_Rate");
			 GST = rs.getDouble("tax_percentage");
			 iGST = rs.getDouble("igstPercentage");
			 intialPay = rs.getDouble("initial_Payment");
			 System.out.println("Rax rate = = ="+Without_Tax_Rate);
			if( iGST == 0 || iGST == 5 || iGST == 12 || iGST == 18 || iGST == 28){
				double taxPerc = (iGST/100);
				double taxAmount=taxPerc*(Without_Tax_Rate);
				double igstAmount = taxAmount * quantity;
				double qnt=rs.getDouble("quantity");
				double sale_price=rs.getDouble("sale_price");
				sale=(sale_price - taxAmount);
				tota =  (sale * qnt)  ;
				 igstTotal = igstTotal + igstAmount;
				 System.out.println("igstTotal = = ="+igstTotal);
			}
			 if(GST == 0.00 || GST == 5.00 || GST == 12.00 || GST == 18.00 || GST == 28.00){
				double taxPerc = (GST/100);
				double taxAmount=taxPerc*(Without_Tax_Rate);
				double gstAmount = taxAmount * quantity;
				double qnt=rs.getDouble("quantity");
				double sale_price=rs.getDouble("sale_price");
				sale=(sale_price - taxAmount);
				tota =  (sale * qnt) ;
				gstTotal = gstTotal + gstAmount;
				System.out.println("gstTotal = = ="+gstTotal);
			}
			
		  	double qnt=rs.getDouble("quantity");
			/*double sale_price=rs.getDouble("sale_price");
			sale=(sale_price-(igstTotal/qnt) - (gstTotal/qnt)); */
		    
		    double perProuductPrize=tota/qnt;
			
			DecimalFormat formatter = new DecimalFormat("#0.00");
   			/* double d=formatter.format(sale); */
			String Without_Tax = String.valueOf(formatter.format(perProuductPrize)); 
			table_cell3 = new PdfPCell(new Phrase(Without_Tax, font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			
			 GST = rs.getDouble("tax_percentage");
			double half = 2;
			double halfGST = GST/half;
			
			table_cell3 = new PdfPCell(new Phrase(String.valueOf(halfGST), font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			
			table_cell3 = new PdfPCell(new Phrase(String.valueOf(halfGST), font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			iGST = rs.getDouble("igstPercentage");
			table_cell3 = new PdfPCell(new Phrase(String.valueOf(iGST), font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			
			table_cell3 = new PdfPCell(new Phrase(String.valueOf(formatter.format(tota)), font12NoBold));
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
			table_cell3.setBorderWidth(1f);
			table_cell3.setPaddingTop(2);
			table_cell3.setPaddingBottom(2);
			table3.addCell(table_cell3);
			
			
		}

		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("\n\n"));
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		

		//-----------------------------------

		table_cell3 = new PdfPCell(new Phrase("BANK-STATE BANK OF INDIA,TAMSA", font13Bold));
		table_cell3.setColspan(6);
		table_cell3.setHorizontalAlignment(Element.ALIGN_LEFT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.TOP);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("GST Total Amount", font13Bold));
		table_cell3.setColspan(3);
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase(df.format(gstTotal), font13Bold));
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("A/C No.62300088676", font13Bold));
		table_cell3.setColspan(6);
		table_cell3.setHorizontalAlignment(Element.ALIGN_LEFT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT );
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("IGST Total Amount", font13Bold));
		table_cell3.setColspan(3);
		/* table_cell3.setRowspan(2); */
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase(df.format(igstTotal), font13Bold));
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		/* table_cell3.setRowspan(2); */
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		
	    table_cell3 = new PdfPCell(new Phrase("IFSC Code-SBIN0020307", font13Bold));
		table_cell3.setColspan(6);
		table_cell3.setHorizontalAlignment(Element.ALIGN_LEFT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT );
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("Discount", font13Bold));
		table_cell3.setColspan(3);
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase(String.valueOf(discount), font13Bold));
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3); 
		
		
		table_cell3 = new PdfPCell(new Phrase("", font13Bold));
		table_cell3.setColspan(6);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.TOP);
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("Initial Payment", font13Bold));
		table_cell3.setColspan(3);
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase(String.valueOf(intialPay), font13Bold));
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		
		table_cell3 = new PdfPCell(new Phrase("                                        for", font13Bold));
		table_cell3.setColspan(6);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT );
		table3.addCell(table_cell3);
		
		table_cell3 = new PdfPCell(new Phrase("Hamali Expense", font13Bold));
		table_cell3.setColspan(3);
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase(df.format(Double.parseDouble(HamaliExpence)), font13Bold));
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		if(ShopId == 1){
			table_cell3 = new PdfPCell(new Phrase("Customer sign               SANTOSH INDUSTRIES", font13Bold));
			table_cell3.setColspan(6);
			table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
			table_cell3.setPaddingBottom(5f);
			table_cell3.setPaddingTop(5f);
			table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
			table3.addCell(table_cell3);
			 }
			 else{
				 table_cell3 = new PdfPCell(new Phrase("Customer sign               TIRUMALA TRADING", font13Bold));
					table_cell3.setColspan(6);
					table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
					table_cell3.setPaddingBottom(5f);
					table_cell3.setPaddingTop(5f);
					table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT);
					table3.addCell(table_cell3);
			 }
		table_cell3 = new PdfPCell(new Phrase("Gross Total(With Tax)", font13Bold));
		table_cell3.setColspan(3);
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase(df.format(Double.parseDouble(gross_total)), font13Bold));
		table_cell3.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table_cell3.setPaddingBottom(5f);
		table_cell3.setPaddingTop(5f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		// Gross Total in Words
		long totalInLong = Math.round(Double.parseDouble(gross_total));
		String grossTotal = String.valueOf(totalInLong);
		int grossTotalInInteger = Integer.parseInt(grossTotal);
		NumToWord w = new NumToWord();
		String amtInWord = w.convert(grossTotalInInteger);

		table_cell3 = new PdfPCell(new Phrase("\n Rupees in words : "
				+ amtInWord + " Only/-\n "));
		table_cell3.setColspan(10);
		table_cell3.setHorizontalAlignment(Element.ALIGN_LEFT);
		table_cell3.setPaddingBottom(1f);
		table_cell3.setPaddingTop(1f);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);
		
		
		table_cell3 = new PdfPCell(new Phrase("\n I/We hereby certify that my/our registration certification under the maharashtra Value Added Tax act, 2002 is in force on the date on which sale of the goods specifide in this bill/cash memorandum is made by me/us and that the transaction of sale covered by this bill/cash memorandum has been effected by me and it shall be accounted for in the turnover of sales while filling my return.", font12NoBold));
		table_cell3.setColspan(10);
		table_cell3.setHorizontalAlignment(Element.ALIGN_JUSTIFIED);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.TOP);
		table_cell3.setBorderWidth(1f);
		table3.addCell(table_cell3);

		table_cell3 = new PdfPCell(new Phrase("\n\n\n Customer Sign                    							           From Santosh Industries", font12NoBold));
		table_cell3.setColspan(10);
		table_cell3.setHorizontalAlignment(Element.ALIGN_CENTER);
		table_cell3.setBorder(Rectangle.RIGHT | Rectangle.LEFT | Rectangle.BOTTOM);
		table_cell3.setBorderWidth(1f);
		table_cell3.setPaddingBottom(3);
		table3.addCell(table_cell3);

		document.add(table3);
		// step 5 

		rs.close();
		stmt.close();
		conn.close();
		document.close();
		

	} catch (DocumentException de) {
		throw new IOException(de.getMessage());
	}
%>



