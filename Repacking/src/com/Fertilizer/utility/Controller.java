package com.Fertilizer.utility;

import java.io.IOException;
import java.text.ParseException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.Fertilizer.bean.CustomerBean;
import com.Fertilizer.dao.MeasuringUnitsDao;
import com.Fertilizer.helper.CategoryDetailsHelper;
import com.Fertilizer.helper.CustomerDetailsHelper;
import com.Fertilizer.helper.CustomerPaymentHelper;
import com.Fertilizer.helper.DailySaleHelper;
import com.Fertilizer.helper.EmployeeDetailsHelper;
import com.Fertilizer.helper.EmployeePaymentHelper;
import com.Fertilizer.helper.ExpenditureDetailsHelper;
import com.Fertilizer.helper.ExpenditurePaymentHelper;
import com.Fertilizer.helper.ExpenseDetailForBillingAndGoodsReceiveHelper;
import com.Fertilizer.helper.FertilizerBillHelper;
import com.Fertilizer.helper.GodownDetailsHelper;
import com.Fertilizer.helper.GoodsReceiveHelper;
import com.Fertilizer.helper.ItemStockHelper;
import com.Fertilizer.helper.LoginController;
import com.Fertilizer.helper.LogoutController;
import com.Fertilizer.helper.MeasuringUnitsHelper;
import com.Fertilizer.helper.PackingHelper;
import com.Fertilizer.helper.Packing_InfoHelper;
import com.Fertilizer.helper.PesticideBillHelper;
import com.Fertilizer.helper.ProductDetailsHelper;
import com.Fertilizer.helper.PurchaseOrderHelper;
import com.Fertilizer.helper.PurchaseReturnHelper;
import com.Fertilizer.helper.SeedPesticideBillHelper;
import com.Fertilizer.helper.SupplierAccountDetailsHelper;
import com.Fertilizer.helper.SupplierCashBankHelper;
import com.Fertilizer.helper.SupplierDetailsHelper;
import com.Fertilizer.helper.TaxCreationHelper;
import com.Fertilizer.helper.UpdateDcNumberHelper;
import com.Fertilizer.helper.UserDetailsHelper;
import com.Fertilizer.helper.shopDetailHelper;
import com.Fertilizer.hibernate.GoodsReceiveBean;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Controller {

	private String toJson(Object data) {
		Gson gson = new GsonBuilder().setPrettyPrinting().disableHtmlEscaping()
				.create();
		return gson.toJson(data);
	}

	// For login
	public String login(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		LoginController helper = new LoginController();
		helper.loginUser(request, response);
		return toJson("Data Added Successsfully");
	}

	// For language
	public String language(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		LoginController helper = new LoginController();
		helper.language(request, response);
		return toJson("Data Added Successsfully");
	}

	// for logout
	public String logout(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		LogoutController helper = new LogoutController();
		helper.logoutUser(request, response);
		return toJson("Data Added Successsfully");
	}

	// Register Employee Details
	public String regDetails(HttpServletRequest request,
			HttpServletResponse response) {
		EmployeeDetailsHelper edh = new EmployeeDetailsHelper();
		boolean b = edh.employeeDetails(request, response);
		if(b){
			return toJson("Data Added Successfully");
		}else{
			return toJson("Data is not added successfully !");
		}
			
		
	}

	// Register Customer Details
	public String customerDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		CustomerDetailsHelper cdh = new CustomerDetailsHelper();
		cdh.customerDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register Measuring Units
	public String measuringUnits(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		MeasuringUnitsHelper mdh = new MeasuringUnitsHelper();
		mdh.unitDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register Supplier Details
	public String supplierDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		SupplierDetailsHelper sdh = new SupplierDetailsHelper();
		sdh.supplierDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register Expense Details
	public String addExpenseDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		ExpenditureDetailsHelper exdh = new ExpenditureDetailsHelper();
		exdh.expenseDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register Expense Details for billing
	public String addExpenseDetailsForBilling(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		ExpenseDetailForBillingAndGoodsReceiveHelper exdh = new ExpenseDetailForBillingAndGoodsReceiveHelper();
		exdh.expenseDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register New Tax
	public String taxCreation(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		TaxCreationHelper tch = new TaxCreationHelper();
		tch.taxCreationDetails(request, response);
		return toJson("Data Added Successfully");

	}

	// Register User Details
	public String regUserDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		UserDetailsHelper udh = new UserDetailsHelper();
		udh.userDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register product details
	public String proDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		ProductDetailsHelper pdh = new ProductDetailsHelper();
		pdh.productDetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Register Category details
	public String categoryDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		CategoryDetailsHelper catdh = new CategoryDetailsHelper();
		catdh.catDetails(request, response);
		return toJson("Data Added Successfully");
	}
	
	// Register Category details by RK
		public String subCategoryDetails(HttpServletRequest request,
				HttpServletResponse response) {
			System.out.println("IN CONTROLLER");
			CategoryDetailsHelper catdh = new CategoryDetailsHelper();
			catdh.subCatDetails(request, response);
			return toJson("Data Added Successfully");
		}
		
		
		// Register Packing_Type details
		public String PackingTypeInfo(HttpServletRequest request,
				HttpServletResponse response) {
			System.out.println("IN CONTROLLER");
			Packing_InfoHelper pih = new Packing_InfoHelper();
			pih.PackTypeDetails(request, response);
			return toJson("Data Added Successfully");
		}
		//get unit for packing
		public String getunit(HttpServletRequest request, HttpServletResponse response) {
			String unitid = request.getParameter("unitid");
			PackingHelper ph = new PackingHelper();
			Map map = ph.getunit(unitid);
			String xyz = toJson(map);
			System.out.println(xyz);
			return xyz;
		}
		//get quantity for packing
		public String getquantity(HttpServletRequest request, HttpServletResponse response) {
			String id = request.getParameter("id");
			PackingHelper ph = new PackingHelper();
			Map map = ph.getquantity(id);
			String xyz = toJson(map);
			System.out.println(xyz);
			return xyz;
		}
		
		
		// Register Packing details
		public String  packingDetails(HttpServletRequest request,
				HttpServletResponse response) {
			System.out.println("IN CONTROLLER");
			PackingHelper ph = new PackingHelper();
			ph.PackDetails(request, response);
			return toJson("Data Added Successfully");
		}
		
		
		//shop details by RK
		public String shopDetails(HttpServletRequest request,
				HttpServletResponse response) {
			System.out.println("IN CONTROLLER");
			shopDetailHelper sdh = new shopDetailHelper();
			sdh.shopDetails(request, response);
			return toJson("Data Added Successfully");
		}
		
		

	// Register Supplier Account details
	public String suppAccountDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		SupplierAccountDetailsHelper sadh = new SupplierAccountDetailsHelper();
		sadh.suppAccDetails(request, response);
		return toJson("Data Added Successfully");
	}

	/* Add Godown Details */

	public String godownDetailsFir(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		GodownDetailsHelper catdh = new GodownDetailsHelper();
		catdh.godownDetail(request, response);
		return toJson("Data Added Successfully");
	}

	// fetching Bill number as per Supplier Name in Supplier Payment from
	// Supplier Account details for oil
	public String getAllBillBySuppliers(HttpServletRequest request,
			HttpServletResponse response) {
		String supplierId = request.getParameter("supplier");
		System.out.println("in controller for oil bill - "+supplierId);
		SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
		Map map = helper.getAllBillBySuppliers(supplierId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
	// fetching Bill number as per Supplier Name in Supplier Payment from
	// Supplier Account details for contianer
	public String getAllBillBySupplierss(HttpServletRequest request,
			HttpServletResponse response) {
		String supplierIdd = request.getParameter("supplier");
		System.out.println("getting container bill -  "+supplierIdd);
		SupplierAccountDetailsHelper helperr = new SupplierAccountDetailsHelper();
		Map map = helperr.getAllBillBySupplierss(supplierIdd);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// fetching Bill number as per customer Name in customer Payment
	public String getAllBillByCustomer(HttpServletRequest request,
			HttpServletResponse response) {
		String fkCustomerId = request.getParameter("creditCustomer");
		String catId = request.getParameter("cat");
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		Map map = helper.getAllBillByCustomers(fkCustomerId,catId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// Getting Total amount as per Bill number in Customer Payment from
	// fertilizer bill table
	public String getTotalAmtByBillNoForCreditCustomer(
			HttpServletRequest request, HttpServletResponse response) {
		String pageTota = request.getParameter("totalAmount1");
		String creditCustomer = request.getParameter("creditCustomer");
		System.out.println("in controller"+pageTota);
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		Map map = helper.getTotalAmtByBillNo(creditCustomer);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
// tat n bal for credit cust
	public String gettotalnbalanceAmt(HttpServletRequest request, HttpServletResponse response) {
		String billno = request.getParameter("billno");
		String creditCustomer = request.getParameter("creditCustomer");
		System.out.println("in controller - "+billno+" , cust id - "+creditCustomer);
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		Map map = helper.gettotalnbalanceAmt(creditCustomer,billno);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
	
	
	// fetching balance amount as per Bill number in Customer Payment from
	// Customer Payment table
	public String getBalanceAmtByBillNoForCreditCustomer(
			HttpServletRequest request, HttpServletResponse response) {
		System.out.println("In controller balance");
		String catId = request.getParameter("cat");
		String totalAmount1 = request.getParameter("totalAmount1");
		String creditCustomer = request.getParameter("creditCustomer");
		System.out.println("In controller total"+totalAmount1);
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		Map map = helper.getBalanceAmtByBillNo(totalAmount1,creditCustomer,catId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// fetching product name as per Supplier Name in purchase order details from
	// product details
	public String getAllProductBySuppliers(HttpServletRequest request,
			HttpServletResponse response) {
		String supplierId = request.getParameter("supplier");

		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map map = helper.getAllProduct(supplierId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// Getting Total amount as per Bill number in Supplier Payment from goods
	// receive table
	public String getTotalAmtByBillNo(HttpServletRequest request,
			HttpServletResponse response) {
		String billNo = request.getParameter("billNo");
		String supplierId = request.getParameter("supplier");
		SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
		Map map = helper.getTotalAmtByBillNo(billNo, supplierId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
	
	// Getting Total amount as per Bill number in Supplier Payment from goods
	// receive table  container 
	public String getTotalAmtByBillNoo(HttpServletRequest request,
			HttpServletResponse response) {
		String billNo = request.getParameter("billNo");
		String supplierId = request.getParameter("supplier");
		SupplierAccountDetailsHelper helperr = new SupplierAccountDetailsHelper();
		Map map = helperr.getTotalAmtByBillNoo(billNo, supplierId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// Getting Remaining balance amount as per Bill number in Supplier Payment
	// from Supplier Payment details table
	public String getBalanceAmtByBillNo(HttpServletRequest request,
			HttpServletResponse response) {
		String billNo = request.getParameter("billNo");
		String supplier = request.getParameter("supplier");
		String totalAmount = request.getParameter("totalAmount");
		SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
		Map map = helper.getRemainingAmtByBillNo(billNo, supplier, totalAmount);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
	// Getting Remaining balance amount as per Bill number in Supplier Payment
	// from Supplier Payment details table   for container
	public String getBalanceAmtByBillNooo(HttpServletRequest request, HttpServletResponse response) {
		String billNo = request.getParameter("billNo");
		String supplier = request.getParameter("supplier");
		String totalAmount = request.getParameter("totalAmount");
		SupplierAccountDetailsHelper helperr = new SupplierAccountDetailsHelper();
		Map map = helperr.getRemainingAmtByBillNoo(billNo, supplier, totalAmount);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
	
	// Getting Remaining balance amount as per Bill number in Supplier Payment
	// from Supplier Payment details table   container
	public String getBalanceAmtByBillNoo(HttpServletRequest request,
			HttpServletResponse response) {
		String billNo = request.getParameter("billNo");
		String supplier = request.getParameter("supplier");
		String totalAmount = request.getParameter("totalAmount");
		SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
		Map map = helper.getRemainingAmtByBillNo(billNo, supplier, totalAmount);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// Registering Supplier Payment
	public String regSupCashBook(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller");

		SupplierCashBankHelper helper = new SupplierCashBankHelper();
		helper.regSupplierCashBank(request, response);
		return toJson("Data Added Successfully");
	}
	// 	// Registering Supplier Payment for container
	public String regSupCashBookk(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("In controller");

		SupplierCashBankHelper helper = new SupplierCashBankHelper();
		helper.regSupplierCashBankk(request, response);
		return toJson("Data Added Successfully");
	}

	// Registering Credit Customer Payment
	public String regCreditCustCashBook(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller");

		CustomerPaymentHelper helper = new CustomerPaymentHelper();
		helper.regCreditCustomerCashBank(request, response);
		return toJson("Data Added Successfully");
	}

	// Registering Employee Payment
	public String regEmpCashBook(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		EmployeePaymentHelper helper = new EmployeePaymentHelper();
		helper.regEmployeePayment(request, response);
		return toJson("Data Added Successfully");
	}

	
	
	  // To Purchase Return 
	public String returntPurchase(HttpServletRequest request, HttpServletResponse response) { 
	  System.out.println("IN CONTROLLER");
	  GoodsReceiveHelper helper = new GoodsReceiveHelper();
	  helper.returntPurchase(request, response); 
	  return toJson("Data UpDated Successfully"); }
	 
	 

	
	
	  public String PurchaseReturn(HttpServletRequest request, HttpServletResponse
	  response) { 
		  System.out.println("IN CONTROLLER"); 
		  PurchaseReturnHelper helper = new PurchaseReturnHelper(); 
		  helper.PurchaseReturn(request, response);
		  return toJson("Data added Successfully"); 
	  
	  }
	 
	
	// To Purchase returntMinusFromStockPurchase
	public String returntMinusFromStockPurchase(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		helper.returntMinusFromStockPurchase(request, response);
		return toJson("Data UpDated Successfully");
	}

	// Registering Expenditure Payment
	public String regExpenseCashBook(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		helper.regExpensePayment(request, response);
		return toJson("Data Added Successfully");
	}

	// Get product detail for goods recive
	public String getProductDetailsPO(HttpServletRequest request,
			HttpServletResponse response) {
		String productId = request.getParameter("productId");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsForPO(productId);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get product detail for advance booking
	public String getProductDetailsForAdvanceBook(HttpServletRequest request,
			HttpServletResponse response) {
		String proName = request.getParameter("proName");
	/*	String fk_cat_id = request.getParameter("fk_cat_id");
		String fk_subCat_id = request.getParameter("fk_subCat_id");
*/
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsForAdvanceBooking(proName);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get previous product detail for goods recive
	public String getpreviousDetsil(HttpServletRequest request,
			HttpServletResponse response) {
		String productId = request.getParameter("productId");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getpreviousDetsil(productId);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get advance booked product detail for goods receive
	public String getbookedProductDetailsForGoodsReceive(
			HttpServletRequest request, HttpServletResponse response) {
		String productId = request.getParameter("productId");
		String category = request.getParameter("fk_cat_id");
		String supplier = request.getParameter("fk_sup_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getBookedProductDetails(productId, supplier,
				category);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get advance booked product detail for goods receive new
	public String getbookedProductDetailsForGoodsReceiveNew(
			HttpServletRequest request, HttpServletResponse response) {
		String proName = request.getParameter("proName");
		String company = request.getParameter("company");
		String weight = request.getParameter("weight");
		String category = request.getParameter("fk_cat_id");
		String supplier = request.getParameter("fk_sup_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getBookedProductDetailsNew(proName, supplier,
				category, company, weight);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get advance booked product detail for goods receive with tax from
	// purchase order table
	public String getProductDetailsForGoodsReceiveForBookedWithTax(
			HttpServletRequest request, HttpServletResponse response) {
		String productId = request.getParameter("productId");
		String category = request.getParameter("fk_cat_id");
		String supplier = request.getParameter("fk_sup_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getBookedProductDetailsWithTax(productId, supplier,
				category);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get advance booked product detail for goods receive with tax from
	// purchase order table
	public String getProductDetailsForGoodsReceiveForBookedWithTaxNew(
			HttpServletRequest request, HttpServletResponse response) {
		String proName = request.getParameter("proName");
		String company = request.getParameter("company");
		String weight = request.getParameter("weight");

		String category = request.getParameter("fk_cat_id");
		String supplier = request.getParameter("fk_sup_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getBookedProductDetailsWithTax(proName, supplier,
				category, company, weight);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get all purchase by bill no on purchase return form
	public String getAllIetmByBillNo(HttpServletRequest request,
			HttpServletResponse response) {
		String bill_no = request.getParameter("bill_no");
		String supplier = request.getParameter("supplier");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		Map items = helper.getAllIetmByBillNo(bill_no,supplier);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Get product detail for goods recive for tax
	public String getProductDetailsForGoodsReceiveForTax(
			HttpServletRequest request, HttpServletResponse response) {
		String proName = request.getParameter("proName");
		String fk_cat_id = request.getParameter("fk_cat_id");
		String fk_subCat_id = request.getParameter("fk_subCat_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsForGoodsReceiveForTax(proName,
				fk_cat_id, fk_subCat_id);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}
	
	// Get Container Details For Good Recieve
		public String getproductDetailInGridForContainer(
				HttpServletRequest request, HttpServletResponse response) {
			String containerName = request.getParameter("containerName");
			String capacity = request.getParameter("capacity");
			Packing_InfoHelper helper = new Packing_InfoHelper();
			Map items = helper.getproductDetailInGridForContainer(containerName,
					capacity);
			String xyz = toJson(items);
			System.out.println(xyz);
			return xyz;
		}

		
		
		
	/*	public String checkQuantity1(
				HttpServletRequest request, HttpServletResponse response) {
			String id = request.getParameter("id");
			PackingHelper helper = new PackingHelper();
			Map items = helper.checkQuantity1(id);
			String xyz = toJson(items);
			System.out.println(xyz);
			return xyz;
		}
		*/
		

		
		
		
		
		
		
	// To fetch project details as per product id
	public String getProductDetailsforbill(HttpServletRequest request,
			HttpServletResponse response) {
		String productId = request.getParameter("productId");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsforbill(productId);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Controller For SeedAND Pestiside GetProductDetails Batch No
	public String getProductDetailsforseedANdPestisidebill(
			HttpServletRequest request, HttpServletResponse response) {
		String productId = request.getParameter("productId");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsforseedANdPestisidebill(productId);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// To get seed and pesticide batch number As per Barcode
	public String getBatchNumforseedANdPestisidebillByBarcode(
			HttpServletRequest request, HttpServletResponse response) {
		String barcode = request.getParameter("barcode");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper
				.getProductDetailsforseedANdPestisidebillAsPerBarcode(barcode);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// get all product details as per category and supplier
	public String getAllProductByCategories(HttpServletRequest request,
			HttpServletResponse response) {
		String category = request.getParameter("fk_cat_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatAndBySup(category);
		String xyz = toJson(items);
		System.out.println("In controller == =  =" + xyz);
		return xyz;
	}

	// get all product details as per category for advance booking
	public String getAllProductByCategoriesForAdvance(
			HttpServletRequest request, HttpServletResponse response) {
		String category = request.getParameter("fk_cat_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatForadvance(category);
		String xyz = toJson(items);
		System.out.println("In controller == =  =" + xyz);
		return xyz;
	}

	// get all product details as per category and supplier for Advance booked
	// goods receive
	public String getAllProductByCategoriesAndBySupplierForBookedGoodsReceive(
			HttpServletRequest request, HttpServletResponse response) {
		String category = request.getParameter("fk_cat_id");
		String supplier = request.getParameter("fk_sup_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatAndBySupForGoodsReceive(category,
				supplier);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// get all product details as per category and supplier for Advance booked
	// goods receive new
	public String getAllProductByCategoriesAndBySupplierForBookedGoodsReceiveNew(
			HttpServletRequest request, HttpServletResponse response) {
		String category = request.getParameter("fk_cat_id");
		String supplier = request.getParameter("fk_sup_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatAndBySupForGoodsReceiveNew(
				category, supplier);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Register purchase order details
	public String addPurchaseOrderDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		PurchaseOrderHelper poh = new PurchaseOrderHelper();
		poh.pODetails(request, response);
		return toJson("Data Added Successfully");
	}

	// Get PO detail for Update DC Number
	public String getPurchaseOrderDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In Controller");
		String poNumber = request.getParameter("poNumber");
		PurchaseOrderHelper helper = new PurchaseOrderHelper();
		Map items = helper.getPODetailsForDcUpdate(poNumber);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Update DC number
	public String updateDCNumber(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("IN CONTROLLER");
		UpdateDcNumberHelper helper = new UpdateDcNumberHelper();
		helper.updateDC(request, response);
		return toJson("Data Added Successfully");
	}

	// fetching Dc Number as per Supplier Name in goodsReceive
	public String getAllDcNumberBySupplierForGoodsReceive(
			HttpServletRequest request, HttpServletResponse response) {
		String supplierId = request.getParameter("supplier");

		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		Map map = helper.getAllDcNumbers(supplierId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	// Get PO detail for Goods Receive
	public String getPODetailsForGoodsReceive(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In Controller");
		String dcNum = request.getParameter("dcNum");
		String supplier = request.getParameter("supplier");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		Map items = helper.getPODetails(dcNum, supplier);
		String xyz = toJson(items);
		items.put("offer", xyz);
		System.out.println(xyz);
		return xyz;
	}

	// Adding Goods Receive
	public String addingGoodsReceive(HttpServletRequest request,
			HttpServletResponse response) throws ParseException {
		System.out.println("IN CONTROLLER");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		helper.goodsReceived(request, response);
		return toJson("Data Added Successfully");
	}
	
	// Adding Container Goods Receive
		public String addingContainerGoodsReceive(HttpServletRequest request,
				HttpServletResponse response) throws ParseException {
			System.out.println("IN CONTROLLER");
			GoodsReceiveHelper helper = new GoodsReceiveHelper();
			helper.addingContainerGoodsReceive(request, response);
			return toJson("Data Added Successfully");
		}

	// Getting village/city as per customer in credit customer bill from
	// customer details table
	public String getVillageNameAndContactNoAndFirstNameByCustomer(
			HttpServletRequest request, HttpServletResponse response) {
		String creditCustomerId = request.getParameter("creditCustomerId");
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		Map map = helper.getVillage(creditCustomerId);
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}

	//sub category drop down
			public String getSubCategoryDetails(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				String fk_cat_id = request.getParameter("fk_cat_id");
				ProductDetailsHelper catdh = new ProductDetailsHelper();
				Map map=catdh.getSubCatDetails(fk_cat_id);
				String xyz = toJson(map);
				System.out.println(xyz);
				return xyz;
			}
			
			//supplier name in good recieve
			public String getSupName(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				String fk_sup_id = request.getParameter("fk_sup_id");
				SupplierDetailsHelper catdh = new SupplierDetailsHelper();
				Map map=catdh.getSupName(fk_sup_id);
				String xyz = toJson(map);
				System.out.println(xyz);
				return xyz;
			}
			
			//Credit Customer Name Apend In Billing
			public String getCustName(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				String fk_cust_id = request.getParameter("fk_cust_id");
				CustomerDetailsHelper catdh = new CustomerDetailsHelper();
				Map map=catdh.getCustName(fk_cust_id);
				String xyz = toJson(map);
				System.out.println(xyz);
				return xyz;
			}
	
	
			//sub shop name drop down
			public String getShopDetails(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				shopDetailHelper sndh = new shopDetailHelper();
				Map map=sndh.getShopDetails();
				String xyz = toJson(map);
				System.out.println(xyz);
				return xyz;
			}
			
			//sub category drop down
			public String getSubCategoryDetails1(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				String fk_cat_id = request.getParameter("fk_cat_id");
				GoodsReceiveHelper catdh = new GoodsReceiveHelper();
				Map map=catdh.getSubCatDetails(fk_cat_id);
				String xyz = toJson(map);
				System.out.println(xyz);
				return xyz;
			}
			
			public String getProductNameDetails(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				String fk_cat_id = request.getParameter("fk_cat_id");
				String fk_subCat_id = request.getParameter("fk_subCat_id");
				GoodsReceiveHelper pndh = new GoodsReceiveHelper();
				Map map=pndh.getProNameDetails(fk_cat_id,fk_subCat_id);
				String xyz = toJson(map);
				System.out.println(xyz);
				return xyz;
			}

	/*
	 * //Adding fertilizer bill public String
	 * addingFertilizerBill(HttpServletRequest request , HttpServletResponse
	 * response) throws ParseException { System.out.println("IN CONTROLLER");
	 * FertilizerBillHelper helper = new FertilizerBillHelper();
	 * helper.fertilizerBill(request, response); return
	 * toJson("Data Added Successfully"); }
	 */
	/*
	 * public String addingCreditCustomerFertilizerBill(HttpServletRequest
	 * request , HttpServletResponse response) throws ParseException {
	 * System.out.println("IN CONTROLLER"); FertilizerBillHelper helper = new
	 * FertilizerBillHelper(); helper.fertilizerBillForCreditCustomer(request,
	 * response); return toJson("Data Added Successfully"); }
	 */

	// to fetch project detail as per batch no.
	public String getProductDetailsByBatchNo(HttpServletRequest request,
			HttpServletResponse response) {
		String batchNo = request.getParameter("batchNo");
		System.out.println(batchNo + "In Controller");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsByBatchNo(batchNo);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// current stock report
	public String getAllCurrentStockReport(HttpServletRequest request,
			HttpServletResponse response) {
		ItemStockHelper helper = new ItemStockHelper();
		List stockList = helper.getCurrentStockBYColor();

		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", stockList);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);

	}

	// sale report between two days
	public String getSaleReportBetweenTwoDates(HttpServletRequest request,
			HttpServletResponse response) {
		FertilizerBillHelper helper = new FertilizerBillHelper();
		List categories = helper.getSaleDetailsBYDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// sale details as per single date
	public String getSaleDetailsBYSingalDate(HttpServletRequest request,
			HttpServletResponse response) {
		FertilizerBillHelper helper = new FertilizerBillHelper();
		List categories = helper.getSaleDetailsBYSingalDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Credit Customer payment as per single date
	public String getCreditCustPaymentDetailsForSingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		CustomerPaymentHelper helper = new CustomerPaymentHelper();
		List categories = helper.getCustPaymentDetailsBySingleDate(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Credit Customer payment as per bill number
	public String getCreditCustPaymentDetailsForBillNo(
			HttpServletRequest request, HttpServletResponse response) {
		CustomerPaymentHelper helper = new CustomerPaymentHelper();
		List categories = helper.getCustPaymentDetailsByBill(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Credit Customer payment as per Name
	public String getCustomerReportByName(HttpServletRequest request,
			HttpServletResponse response) {
		CustomerPaymentHelper helper = new CustomerPaymentHelper();
		List categories = helper
				.getCustPaymentDetailsByNames(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Credit Customer payment report between two days
	public String getCustomerReportBetweenTwoDates(HttpServletRequest request,
			HttpServletResponse response) {
		CustomerPaymentHelper helper = new CustomerPaymentHelper();
		List categories = helper.getCustDetailsByDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Supplier payment as per single date
	public String getSupplierPaymentDetailsForSingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		SupplierCashBankHelper helper = new SupplierCashBankHelper();
		List categories = helper.getSupplierPaymentDetailsBySingleDate(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Supplier payment as per bill number
	public String getSupplierPaymentDetailsAsPerBillNumber(
			HttpServletRequest request, HttpServletResponse response) {
		SupplierCashBankHelper helper = new SupplierCashBankHelper();
		List categories = helper.getSupplierPaymentDetailsByBillNumber(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Supplier payment as per name
	public String getSupplierPaymentDetailsAsPerName(
			HttpServletRequest request, HttpServletResponse response) {
		SupplierCashBankHelper helper = new SupplierCashBankHelper();
		List categories = helper.getSupplierPaymentDetailsByNames(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$   " + returnMap);
		return toJson(returnMap);
	}

	// Supplier payment report between two days
	public String getSupplierPaymentReportBetweenTwoDates(
			HttpServletRequest request, HttpServletResponse response) {
		SupplierCashBankHelper helper = new SupplierCashBankHelper();
		List categories = helper.getSupplierPaymentByTwoDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Employee payment as per single date
	public String getEmpPaymentDetailsForSingleDate(HttpServletRequest request,
			HttpServletResponse response) {
		EmployeePaymentHelper helper = new EmployeePaymentHelper();
		List categories = helper.getEmployeePaymentDetailsForSingleDate(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Employee payment report between two days
	public String getEmployeeReportBetweenTwoDates(HttpServletRequest request,
			HttpServletResponse response) {
		EmployeePaymentHelper helper = new EmployeePaymentHelper();
		List categories = helper.getEmpPaymentByTwoDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Expenditure payment report as per single date
	public String getExpensePaymentDetailsForSingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.getExpensePaymentDetailsForSingleDate(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Expenditure payment report between two days
	public String getExpenditurePaymentReportBetweenTwoDates(
			HttpServletRequest request, HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.getExpensePaymentDetailByTwoDate(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Expenditure payment report between two days as per name
		public String getExpenditurePaymentReportBetweenTwoDatesAsPerExpName(
				HttpServletRequest request, HttpServletResponse response) {
			ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
			List categories = helper.getExpensePaymentDetailByTwoDatePerName(request,
					response);
			Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
			return toJson(returnMap);
		}
		
		// Balance report between as per Village name
				public String getBalanceReportPerVillageName(
						HttpServletRequest request, HttpServletResponse response) {
					ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
					List categories = helper.getBalanceReportPerVillageName(request,
							response);
					Map<String, List> returnMap = new HashMap<String, List>();
					returnMap.put("list", categories);
					System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
					return toJson(returnMap);
				}
		

	// Product detail report as per Category
	public String getProductDetailForReportAsPerCat(HttpServletRequest request,
			HttpServletResponse response) {
		ProductDetailsHelper helper = new ProductDetailsHelper();
		List categories = helper.getProductDetailForReportAsPerCategory(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("productlist", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	/*
	 * // Purchase report as per single date public String
	 * getPurchaseDetailsForSingleDate(HttpServletRequest request,
	 * HttpServletResponse response) { GoodsReceiveHelper helper = new
	 * GoodsReceiveHelper(); List categories =
	 * helper.getPurchaseDetailsForSingleDate(request, response); Map<String,
	 * List> returnMap = new HashMap<String, List>(); returnMap.put("list",
	 * categories); System.out.println("$$$$$$$$$$$$$$$$" + returnMap); return
	 * toJson(returnMap); }
	 */

	// Sale report as per Category between two dates
	public String getSaleDetailsAsPerCategoryBetweenTwoDates(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsAsPerCategoryBetTwoDates(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Sale report as per Shop between two dates
	public String getSaleDetailsAsPerShopBetweenTwoDates(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsAsPerShopBetTwoDates(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Sale report as per Category for single date
	public String getSaleDetailsAsPerCategoryForSingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsAsPerCategoryForSingleDate(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Sale report as per Payment Mode
	public String getSaleDetailsAsPerPaymentMode(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsPerPaymentMode(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Sale report as per Single date Payment Mode
	public String getSaleDetailsAsPerPaymentModeForSingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsPerPaymentModeGorSingleDate(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Sale report as per Two Dates Payment Mode
	public String getSaleDetailsAsPerPaymentModeForTwoDates(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsPerPaymentModeForTwoDate(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Sale report as per Two ID
		public String saleReportBetweenToId(
				HttpServletRequest request, HttpServletResponse response) {
			GoodsReceiveHelper helper = new GoodsReceiveHelper();
			List categories = helper.saleReportBetweenToId(
					request, response);
			Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
			return toJson(returnMap);
		}
	
	
	// Sale report as per GST
	public String getSaleDetailsAsPerGST(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsPerGSTPercentage(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Sale report as per Product name for single date
	public String getSaleDetailsAsPerProductNameForSingleDate(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getSaleDetailsAsPerProNameForSingleDate(
				request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	// Sale report as per Supplier Name
		public String getSaleDetailsAsPerSupplierName(
				HttpServletRequest request, HttpServletResponse response) {
			GoodsReceiveHelper helper = new GoodsReceiveHelper();
			List categories = helper.getSaleDetailsAsPerSup(
					request, response);
			Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
			return toJson(returnMap);
		}

		// Sale report as per Product name between two dates
		public String getSaleDetailsAsPerProductNameBetweenTwoDates(
				HttpServletRequest request, HttpServletResponse response) {
			GoodsReceiveHelper helper = new GoodsReceiveHelper();
			List categories = helper.getSaleDetailsAsPerProductNameBetTwoDates(
					request, response);
			Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
			return toJson(returnMap);
		}
	/*
	 * //Stock report as per Category public String
	 * getStockReportAsPerCategory(HttpServletRequest request ,
	 * HttpServletResponse response) { GoodsReceiveHelper helper = new
	 * GoodsReceiveHelper(); List categories =
	 * helper.getStockDetailsAsPerCategory(request, response); Map<String,List>
	 * returnMap = new HashMap<String,List>(); returnMap.put("list",categories);
	 * System.out.println("$$$$$$$$$$$$$$$$"+returnMap); return
	 * toJson(returnMap); }
	 */

	// Stock report of container
	public String StockDetailsOfcontainer(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.StockDetailsOfcontainer(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// tax delete by kishor
	// Delete Tax
	public String deleteTax(HttpServletRequest request, HttpServletResponse response) {
		
		System.out.println("in controller.java by kishor ");
		TaxCreationHelper helper = new TaxCreationHelper();
		helper.deleteTaxes(request, response);
		/*
		 * Map<String, List> returnMap = new HashMap<String, List>();
		 * returnMap.put("list", categories);
		 * System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		 */
		String data = "Tax Deleted Sucessfully";
		return data;
	}
	
	// packed and unpacked stock
		public String PackedAndUnpackedStock(HttpServletRequest request,
				HttpServletResponse response) {
			GoodsReceiveHelper helper = new GoodsReceiveHelper();
			List categories = helper.PackedAndUnpackedStock(request,
					response);
			Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
			return toJson(returnMap);
		}

	// To fetch project details as per product id
	public String getProductDetailsforbillAsPerBarcode(
			HttpServletRequest request, HttpServletResponse response) {
		String barcode = request.getParameter("barcode");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsforbillByBarcode(barcode);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	/* Add Godown Details by Anil */

	public String getAllProductByGodown(HttpServletRequest request,
			HttpServletResponse response) {
		String fk_godown_id = request.getParameter("fk_godown_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByGodown(fk_godown_id);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	public String getProductDetailsGodowm(HttpServletRequest request,
			HttpServletResponse response) {
		String productId = request.getParameter("productId");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getProductDetailsGodowm(productId);
		String xyz = toJson(items);
		System.out.println(xyz);
		return xyz;
	}

	// Graph CODE

	public String getAllDay(HttpServletRequest request,
			HttpServletResponse response) {
		DailySaleHelper helper = new DailySaleHelper();
		List dayrecord = helper.getDay();
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", dayrecord);
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@" + returnMap);
		return toJson(returnMap);
	}

	public String getAllWeek(HttpServletRequest request,
			HttpServletResponse response) {

		DailySaleHelper helper = new DailySaleHelper();
		List weekrecord = helper.getWeek();
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", weekrecord);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	public String getAllMonth(HttpServletRequest request,
			HttpServletResponse response) {
		DailySaleHelper helper = new DailySaleHelper();
		List weekrecord = helper.getMonth();
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", weekrecord);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Fetching Credit Customer Details To Edit
	public String getCreditCustomerDetailsToEdit(HttpServletRequest request,
			HttpServletResponse response) {
		String strcustomerId = request.getParameter("creditCustomer");
		Long customerId = Long.parseLong(strcustomerId);
		System.out.println("in controller customerId : " + customerId);
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		Map map = helper.getCreditCustomerDetailsForEdit(customerId);
		Map<String, List> returnMap = new HashMap<String, List>();
		String xyz = toJson(map);
		System.out.println(xyz);
		System.out.println("going out of controller");
		return xyz;
	}
	
	

	// update credit customer details
	public String updateCreditCustomerDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller UpdateCreditCustomer");
		CustomerDetailsHelper helper = new CustomerDetailsHelper();
		helper.editCreditCustomer(request, response);
		System.out.println("In controller Updateemployee");
		return toJson("Data Updated Successfully");

	}
	// update Container by kishor 
	/*public String getContainerDetailsToEdit(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller UpdateCreditCustomer");
		Packing_InfoHelper helper = new Packing_InfoHelper();
		helper.editContainerInformation(request, response);
		System.out.println("In controller Updateemployee");
		return toJson("Data Updated Successfully");

	}*/
	
	public String getContainerDetailsToEdit(HttpServletRequest request,
			HttpServletResponse response) {
		String strcontainerId = request.getParameter("containerName");
		Long containerId = Long.parseLong(strcontainerId);
		System.out.println("in controller Containerid : " + containerId);
		Packing_InfoHelper helper = new Packing_InfoHelper();
		Map map = helper.editContainerInformation(containerId);
		Map<String, List> returnMap = new HashMap<String, List>();
		String xyz = toJson(map);
		System.out.println(xyz);
		System.out.println("going out of controller");
		return xyz;
	}
	// edit shop
	public String getshopToEdit(HttpServletRequest request, HttpServletResponse response) {
		String shopidd = request.getParameter("shopid");
		Long shopid = Long.parseLong(shopidd);
		System.out.println("in controller shopid : " + shopid);
		shopDetailHelper helper = new shopDetailHelper();
		Map map = helper.editshop(shopid);
		Map<String, List> returnMap = new HashMap<String, List>();
		String xyz = toJson(map);
		System.out.println(xyz);
		System.out.println("going out of controller");
		return xyz;
	}
	
	
	
	// Fetching Supplier Details To Edit
	public String getSupplierDetailsToEdit(HttpServletRequest request,
			HttpServletResponse response) {
		String supplierID = request.getParameter("SupplierId");
		Long supplierId = Long.parseLong(supplierID);
		System.out.println("in controller customerId : " + supplierID);
		SupplierDetailsHelper helper = new SupplierDetailsHelper();
		Map map = helper.getSupplierDetailsForEdit(supplierID);
		Map<String, List> returnMap = new HashMap<String, List>();
		String xyz = toJson(map);
		System.out.println(xyz);
		System.out.println("going out of controller");
		return xyz;
	}

	// update Supplier details
	public String updateSupplierDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller update Supplier Details");
		SupplierDetailsHelper helper = new SupplierDetailsHelper();
		helper.editSupplierDetail(request, response);
		System.out.println("In controller Updateemployee");
		return toJson("Data Updated Successfully");

	}

	// Fetching Employee Details To Edit
	public String getEmployeeDetailsToEdit(HttpServletRequest request,
			HttpServletResponse response) {
		String empID = request.getParameter("EmpId");
		Long empId = Long.parseLong(empID);
		System.out.println("in controller customerId : " + empId);
		EmployeeDetailsHelper helper = new EmployeeDetailsHelper();
		Map map = helper.getEmployeeDetailsForEdit(empId);
		Map<String, List> returnMap = new HashMap<String, List>();
		String xyz = toJson(map);
		System.out.println(xyz);
		System.out.println("going out of controller");
		return xyz;
	}

	// update Employee details
	public String updateEmployeeDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller update Supplier Details");
		EmployeeDetailsHelper helper = new EmployeeDetailsHelper();
		helper.editEmployeeDetail(request, response);
		System.out.println("In controller Updateemployee");
		return toJson("Data Updated Successfully");

	}

	// Fetching Product Details To Edit
	public String getProuctDetailsToEdit(HttpServletRequest request,
			HttpServletResponse response) {
		String productId = request.getParameter("productId");
		Long productID = Long.parseLong(productId);
		System.out.println("in controller product : " + productID);
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map map = helper.getProductDetailsForEdit(productID);
		Map<String, List> returnMap = new HashMap<String, List>();
		String xyz = toJson(map);
		System.out.println(xyz);
		System.out.println("going out of controller");
		return xyz;
	}

	// update product details
	public String updateProductDetails(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller update Supplier Details");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		helper.editProductDetail(request, response);
		System.out.println("In controller Updateemployee");
		return toJson("Data Updated Successfully");

	}
	
	//update  UpdatePackingTypeInfo
	public String UpdatePackingTypeInfo(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller update Container info");
		Packing_InfoHelper pih = new Packing_InfoHelper();
		pih.editUpdatePackingTypeInfo(request, response);
		System.out.println("In controller Updateemployee");
		return toJson("Data Updated Successfully");

	}
	


	
	/* Bill copy Generation */
	public String billGeneration(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("Start In regProfarmaDetail Controller");
		FertilizerBillHelper helper = new FertilizerBillHelper();
		helper.billGeneration(request, response);
		System.out.println("Start In regProfarmaDetail Controller");
		return toJson("Data Added Successsfully");
	}




/* Bill copy of credit customer */
				public String CreditCustmerBillCOPY(HttpServletRequest request, HttpServletResponse response) throws IOException {
					System.out.println("Start In regProfarmaDetail Controller");
					FertilizerBillHelper helper = new FertilizerBillHelper();
					helper.CreditCustmerBillCOPY(request, response);
					System.out.println("Start In regProfarmaDetail Controller");
					return toJson("Data Added Successsfully");
				}

				

	// all Credit amount form credit Cust payment
	public String getCreditAmountByCreditCust(HttpServletRequest request,
			HttpServletResponse response) {
		FertilizerBillHelper helper = new FertilizerBillHelper();
		List categories = helper.getCreditAmountByCreditCust(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// all Credit amount form sale billing
	public String getCreditAmountByBilling(HttpServletRequest request,
			HttpServletResponse response) {
		FertilizerBillHelper helper = new FertilizerBillHelper();
		List categories = helper.getAllCreditAmtFromBilling(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	public String getPaidAmountToSupplier(HttpServletRequest request,
			HttpServletResponse response) {
		FertilizerBillHelper helper = new FertilizerBillHelper();
		List categories = helper.getPaidAmountToSupplier(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	public String getPaidAmountToEmployee(HttpServletRequest request,
			HttpServletResponse response) {
		FertilizerBillHelper helper = new FertilizerBillHelper();
		List categories = helper.getPaidAmountToEmployee(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	//fetch fertilizer product as per barcode from goods receive for billing
	public String fetchCust(HttpServletRequest request,
			HttpServletResponse response) {

		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getDetailsById(request, response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	//fetch Pesticide product as per barcode from goods receive for billing
	public String getPesticideDetailsAsPerBarcode(HttpServletRequest request,
			HttpServletResponse response) {

		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getPesticideDetailsByBarcode(request, response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// fetching product details from goods receive for fertilizer bill
	public String fetchDetailsAsPerProductNameInFertiBill(
			HttpServletRequest request, HttpServletResponse response) {
		System.out.println("In controller for goods fetch for bill");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getDetailsByProNameForzFertiBill(
				request, response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// fetching product details from goods receive for fertilizer bill
	public String getProductDetails1(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller for goods fetch for bill");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getProductDetailsForFertiBill(request, response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}


	// fetching product details from goods receive for fertilizer bill
	public String getProductDetails2(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller for goods fetch for bill");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getProductDetailsForFertiBill(request,
				response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// fetching product details from goods receive for seed bill
	public String getProductDetailsforSeed(HttpServletRequest request,
			HttpServletResponse response) {
		System.out.println("In controller for goods fetch for bill");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getProductDetailsForSeedBill(request,
				response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	/*
	 * //fetching product details from goods receive for fertilizer bill public
	 * String fetchDetailsAsPerProductNameInFertiBill(HttpServletRequest request
	 * , HttpServletResponse response){
	 * System.out.println("In controller for goods fetch for bill");
	 * GoodsReceiveHelper helper=new GoodsReceiveHelper(); CustomerBean customer
	 * = helper.getDetailsByProNameForzFertiBill(request,response);
	 * Map<String,CustomerBean> returnMap = new HashMap<String,CustomerBean>();
	 * returnMap.put("offer",customer);
	 * System.out.println("$$$$$$$$$$$$$$$$"+returnMap); return
	 * toJson(returnMap); }
	 */

	// Adding fertilizer bill
	public String addingFertilizerBill(HttpServletRequest request,
			HttpServletResponse response) throws ParseException {
		System.out.println("IN CONTROLLER");
		FertilizerBillHelper helper = new FertilizerBillHelper();
		helper.fertilizerBilling(request, response);
		return toJson("Data Added Successfully");
	}
	public String addingFertilizerBill_28_5_17(HttpServletRequest request,
			HttpServletResponse response) throws ParseException {
		System.out.println("IN CONTROLLER");
		FertilizerBillHelper helper = new FertilizerBillHelper();
		helper.fertilizerBilling_28_5_17(request, response);
		return toJson("Data Added Successfully");
	}

	// get fertilizer product as per category for fertilizer bill
	public String getAllProductByCategoriesForFertiBill(
			HttpServletRequest request, HttpServletResponse response) {
		//String category = request.getParameter("fk_cat_id");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatForFertiBill();
		String xyz = toJson(items);
		System.out.println("In controller == =  =" + xyz);
		return xyz;
	}
	
	// get fertilizer product as per category for fertilizer bill
		public String getCapacity(
				HttpServletRequest request, HttpServletResponse response) {
			//String category = request.getParameter("fk_cat_id");
			String containerName=request.getParameter("containerName");
			ProductDetailsHelper helper = new ProductDetailsHelper();
			Map items = helper.getCapacity(containerName);
			String xyz = toJson(items);
			System.out.println("In controller == =  =" + xyz);
			return xyz;
		}
	
	// get container Name For Purchase
		public String getContainerName(
				HttpServletRequest request, HttpServletResponse response) {
			//String category = request.getParameter("fk_cat_id");
			Packing_InfoHelper helper = new Packing_InfoHelper();
			Map items = helper.getContainerName();
			String xyz = toJson(items);
			System.out.println("In controller == =  =" + xyz);
			return xyz;
		}
	
	// get fertilizer productname as per packing for packing  
		public String getAllProductBypacking(
				HttpServletRequest request, HttpServletResponse response) {
			PackingHelper helper = new PackingHelper();
			Map items = helper.getAllProductforpacking();
			String xyz = toJson(items);
			System.out.println("In controller == =  =" + xyz);
			return xyz;
		}
		
	 	
		
		
		

	// Get all purchase by bill no on purchase return form
				public String getAllFertiIetmByBillNo(HttpServletRequest request,
						HttpServletResponse response) {
					String bill_no = request.getParameter("bill_no");
					FertilizerBillHelper helper = new FertilizerBillHelper();
					Map items = helper.getAllFertiIetmByBillNo(bill_no);
					String xyz = toJson(items);
					System.out.println(xyz);
					return xyz;
				}
	// Seed Billing details for sale return
				public String getAllSeedBillinfDetailsByBillNo(HttpServletRequest request,
						HttpServletResponse response) {
					String bill_no = request.getParameter("bill_no");
					SeedPesticideBillHelper helper = new SeedPesticideBillHelper();
					Map items = helper.getAllSeedDetailsByBillNo(bill_no);
					String xyz = toJson(items);
					System.out.println(xyz);
					return xyz;
				}

				// Pesticide Billing details for sale return
				public String getAllPesticideBillingDetailsByBillNo(HttpServletRequest request,
						HttpServletResponse response) {
					String bill_no = request.getParameter("bill_no");
					PesticideBillHelper helper = new PesticideBillHelper();
					Map items = helper.getAllPesticideBillDetailsByBillNo(bill_no);
					String xyz = toJson(items);
					System.out.println(xyz);
					return xyz;
				}
				
	// get product name as per category for stock report
	public String getAllProductByCategoriesForStockReport(
			HttpServletRequest request, HttpServletResponse response) {
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatForStockReport();
		String xyz = toJson(items);
		System.out.println("In controller == =  =" + xyz);
		return xyz;
	}
	
	
	// fetching product detail as per batch for seed pesti bill
	public String fetchProductDetailAsPerBatchNumberAndStockForSeedPestiBilling(
			HttpServletRequest request, HttpServletResponse response) {
		System.out.println("In controller for goods fetch for bill");
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		CustomerBean customer = helper.getDetailsByBatchNadStockForSeedBill(
				request, response);
		Map<String, CustomerBean> returnMap = new HashMap<String, CustomerBean>();
		returnMap.put("offer", customer);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Adding seed bill
	public String addingSeedAndPesticideBill(HttpServletRequest request,
			HttpServletResponse response) throws ParseException {
		System.out.println("IN CONTROLLER");
		SeedPesticideBillHelper helper = new SeedPesticideBillHelper();
		helper.seedAndPesticideBillingBilling(request, response);
		return toJson("Data Added Successfully");
	}
	
	// Adding pesticide bill
	public String addingPesticideBill(HttpServletRequest request,
			HttpServletResponse response) throws ParseException {
		System.out.println("IN CONTROLLER");
		PesticideBillHelper helper = new PesticideBillHelper();
		helper.addPesticideBilling(request, response);
		return toJson("Data Added Successfully");
	}

	// get Seed or Pesticide product as per category for Seed or Pesticide bill
	public String getAllProductByCategoriesForSeedAndPestiBill(
			HttpServletRequest request, HttpServletResponse response) {
		String category1 = request.getParameter("fk_cat_id1");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllProductByCatForSeedAndPestiBill(category1);
		String xyz = toJson(items);
		System.out.println("In controller == =  =" + xyz);
		return xyz;
	}

	// get batch num and stock as per product for Seed or Pesticide bill
	public String fetchBatchNumberAndStockForSeedPestiBilling(
			HttpServletRequest request, HttpServletResponse response) {
		String proName = request.getParameter("proName");
		String Company = request.getParameter("company");
		String weight = request.getParameter("weight");
		ProductDetailsHelper helper = new ProductDetailsHelper();
		Map items = helper.getAllBatchNumAndStockForSeedBilling(proName,
				Company, weight);
		String xyz = toJson(items);
		System.out.println("In controller == =  =" + xyz);
		return xyz;
	}

	/*
	 * //get Seed or Pesticide product as per category for Seed or Pesticide
	 * bill public String
	 * getAllProductByCategoriesForSeedAndPestiBill(HttpServletRequest request ,
	 * HttpServletResponse response) { String category1 =
	 * request.getParameter("fk_cat_id1"); String category2 =
	 * request.getParameter("fk_cat_id2"); ProductDetailsHelper helper = new
	 * ProductDetailsHelper(); Map items =
	 * helper.getAllProductByCatForSeedAndPestiBill(category1,category2); String
	 * xyz= toJson(items); System.out.println("In controller == =  ="+xyz);
	 * return xyz; }
	 */

	// get taday credit and debit report
	public String getTodayCreditDebitReport(HttpServletRequest request,
			HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.getTodayCreditDebitReport(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// get taday credit and debit report
	public String getTodayCreditDebitReport1(HttpServletRequest request,
			HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.getTodayCreditDebitReport1(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// get single credit and debit report
	public String creditdebitForsingleDate(HttpServletRequest request,
			HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.creditdebitForsingleDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// get single credit and debit report
	public String creditdebitForsingleDate1(HttpServletRequest request,
			HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.creditdebitForsingleDate1(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// get two credit and debit report
	public String creditdebitForBetTowDate(HttpServletRequest request,
			HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.creditdebitForBetTowDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	public String creditdebitForBetTowDate1(HttpServletRequest request,
			HttpServletResponse response) {
		ExpenditurePaymentHelper helper = new ExpenditurePaymentHelper();
		List categories = helper.creditdebitForBetTowDate1(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	/* Bill copy Generation */
	public String NormalCustFertilizerBillCOPY(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		System.out.println("Start In regProfarmaDetail Controller");
		FertilizerBillHelper helper = new FertilizerBillHelper();
		helper.normalCustFerilizerBillCopy(request, response);
		System.out.println("Start In regProfarmaDetail Controller");
		return toJson("Data Added Successsfully");
	}

	// To Sale Return for fertilizer
			public String returnSale(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				FertilizerBillHelper helper = new FertilizerBillHelper();
				helper.saleReturnAsPerBillNo(request, response);
				return toJson("Data UpDated Successfully");
			}
	
			// To Sale Return for Seed
			public String seedSaleReturn(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				SeedPesticideBillHelper helper = new SeedPesticideBillHelper();
				helper.seedSaleReturnAsPerBillNo(request, response);
				return toJson("Data UpDated Successfully");
			}
	
			// To Sale Return for Pesticide
			public String pesticideSaleReturn(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				PesticideBillHelper helper = new PesticideBillHelper();
				helper.pesticideSaleReturnAsPerBillNo(request, response);
				return toJson("Data UpDated Successfully");
			}
	
			
	/* Fertilizer Bill copy of credit customer */
	public String creditCustFertilzerBillCOPY(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		System.out.println("Start In regProfarmaDetail Controller");
		FertilizerBillHelper helper = new FertilizerBillHelper();
		helper.fertilizerCreditCustmerBillCOPY(request, response);
		System.out.println("Start In regProfarmaDetail Controller");
		return toJson("Data Added Successsfully");
	}

	// Stock report as per Category
	public String getStockReportAsPerCategory(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getStockDetailsAsPerCategory(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Stock report as per ProductName
	public String StockDetailsReportAsPerProductName(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper
				.getStockDetailsAsProductName(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Stock report as per selected company name
	public String StockDetailsReportAsPerCompanyName(
			HttpServletRequest request, HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper
				.getStockDetailsAsCompanyName(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	// Delete customer
		public String deletCustomer(HttpServletRequest request, HttpServletResponse response) {
			CustomerDetailsHelper helper = new CustomerDetailsHelper();
		     helper.deleteCustomer(request, response);
			/*Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);*/
			 String data="customer Deleted Sucessfully";
			 return data;
		}
		// delete cont
		public String deletCont(HttpServletRequest request, HttpServletResponse response) {
			Packing_InfoHelper helper = new Packing_InfoHelper();
		     helper.deleteCont(request, response);
		     System.out.println("in controller to deletecont");
			/*Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);*/
			 String data="Container Deleted Sucessfully";
			 return data;
		}
		//del shop
		public String deleteshop(HttpServletRequest request, HttpServletResponse response) {
			shopDetailHelper helper = new shopDetailHelper();
		     helper.deleteshopname(request, response);
		     System.out.println("in controller to del shop");
			 String data="Shop Deleted Sucessfully";
			 return data;
		}
		
		
		// Delete supplier
				public String deletSupplier(HttpServletRequest request, HttpServletResponse response) {
					SupplierDetailsHelper helper = new SupplierDetailsHelper();
				     helper.deleteSupplier(request, response);
					/*Map<String, List> returnMap = new HashMap<String, List>();
					returnMap.put("list", categories);
					System.out.println("$$$$$$$$$$$$$$$$" + returnMap);*/
					 String data="Supplier Deleted Sucessfully";
					 return data;
				}
				
				// Delete Product
				public String deleteProduct(HttpServletRequest request, HttpServletResponse response) {
					ProductDetailsHelper helper = new ProductDetailsHelper();
				     helper.deleteProduct(request, response);
					/*Map<String, List> returnMap = new HashMap<String, List>();
					returnMap.put("list", categories);
					System.out.println("$$$$$$$$$$$$$$$$" + returnMap);*/
					 String data="Product Deleted Sucessfully";
					 return data;
				}
				// delete unit
				public String deleteUnit(HttpServletRequest request, HttpServletResponse response) {
					MeasuringUnitsHelper helper = new MeasuringUnitsHelper();
				     helper.deleteUnit(request, response);
					/*Map<String, List> returnMap = new HashMap<String, List>();
					returnMap.put("list", categories);
					System.out.println("$$$$$$$$$$$$$$$$" + returnMap);*/
					 String data="Unit Deleted Sucessfully";
					 return data;
				}
				// del cat
				public String deletecat(HttpServletRequest request, HttpServletResponse response) {
					CategoryDetailsHelper helper = new CategoryDetailsHelper();
				     helper.deleteCat(request, response);
					 String data="Category Deleted Sucessfully";
					 return data;
				}
			// sub cat
				public String deletesubcat(HttpServletRequest request, HttpServletResponse response) {
					CategoryDetailsHelper helper = new CategoryDetailsHelper();
				     helper.deletesubCat(request, response);
					 String data="Sub-Category Deleted Sucessfully";
					 return data;
				}
				
				
	// Purchase report as per single date
	public String getPurchaseDetailsForSingleDate(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getPurchaseDetailsForSingleDate(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Purchase report between two days
	public String getPurchaseReportBetweenTwoDates(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getPurchaseDetailByTwoDate(request, response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	
	// Container purchase report between two days
		public String getcontainerPurchase(HttpServletRequest request,
				HttpServletResponse response) {
			GoodsReceiveHelper helper = new GoodsReceiveHelper();
			List categories = helper.getContainerPurchaseDetailByTwoDate(request, response);
			Map<String, List> returnMap = new HashMap<String, List>();
			returnMap.put("list", categories);
			System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
			return toJson(returnMap);
		}
	
	
	// Purchase report as per product
	public String getPurchaseDetailsAsPerProduct(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getPurchaseDetailsAsPerProduct(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Purchase report as per Supplier
	public String getPurchaseDetailsAsPerSupplier(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getPurchaseDetailsAsPerSupplierName(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Purchase report as per Shop
	public String getPurchaseDetailsAsPerShop(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getPurchaseDetailsAsPerShopName(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}
	
	
	// Purchase report as per Category
	public String getPurchaseDetailsAsPerCategory(HttpServletRequest request,
			HttpServletResponse response) {
		GoodsReceiveHelper helper = new GoodsReceiveHelper();
		List categories = helper.getPurchaseDetailsAsPerCategory(request,
				response);
		Map<String, List> returnMap = new HashMap<String, List>();
		returnMap.put("list", categories);
		System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
		return toJson(returnMap);
	}

	// Supplier Account details
	public String getYesterdarTotalAmount(HttpServletRequest request,
			HttpServletResponse response) {
		

		SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
		Map map = helper.getYesterdarTotalAmount();
		String xyz = toJson(map);
		System.out.println(xyz);
		return xyz;
	}
	
	
		public String getTodaySaleTotalAmount(HttpServletRequest request,
				HttpServletResponse response) {
			

			SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
			Map map = helper.getTodaySaleTotalAmount();
			String xyz = toJson(map);
			System.out.println(xyz);
			return xyz;
		}
		
		public String getTodaySaleTotalAmount1(HttpServletRequest request,
				HttpServletResponse response) {
			

			SupplierAccountDetailsHelper helper = new SupplierAccountDetailsHelper();
			Map map = helper.getTodaySaleTotalAmount1();
			String xyz = toJson(map);
			System.out.println(xyz);
			return xyz;
		}

		
		/*//Tax report as per Category from Sale single date
		  public String getTaxDetailsAsPerCategoryFromSale(HttpServletRequest request , HttpServletResponse response) 
			{
			  FertilizerBillHelper helper  = new FertilizerBillHelper();
				List categories =  helper.getTaxDetailsAsPerCategoryFromSale(request, response);
				Map<String,List> returnMap = new HashMap<String,List>();
						returnMap.put("list",categories);
				System.out.println("$$$$$$$$$$$$$$$$"+returnMap);
				return toJson(returnMap);
			}*/

		//Tax report as per Category from Sale Two date
		  public String getTaxDetailsAsPerCategoryFromSaleBetweenTwoDate(HttpServletRequest request , HttpServletResponse response) 
			{
			  FertilizerBillHelper helper  = new FertilizerBillHelper();
				List categories =  helper.getTaxDetailsAsPerCategoryFromSaleBetTwoDate(request, response);
				Map<String,List> returnMap = new HashMap<String,List>();
						returnMap.put("list",categories);
				System.out.println("$$$$$$$$$$$$$$$$"+returnMap);
				return toJson(returnMap);
			}
		  
		//Tax report as per Category
		  public String getTaxDetailsAsPerCategoryFromPurchase(HttpServletRequest request , HttpServletResponse response) 
			{
			  GoodsReceiveHelper helper  = new GoodsReceiveHelper();
				List categories =  helper.getTaxDetailsFromPurchaseForSingleDateAsPerCategory(request, response);
				Map<String,List> returnMap = new HashMap<String,List>();
						returnMap.put("list",categories);
				System.out.println("$$$$$$$$$$$$$$$$"+returnMap);
				return toJson(returnMap);
			}

		  
		// Edit Tax
			public String edittaxCreation(HttpServletRequest request,
					HttpServletResponse response) {
				System.out.println("IN CONTROLLER");
				TaxCreationHelper tch = new TaxCreationHelper();
				tch.edittaxCreation(request, response);
				return toJson("Data UpDated Successfully");

			}
			// updateshop
			public String updateshop(HttpServletRequest request,HttpServletResponse response) {
				System.out.println("IN CONTROLLER updateshop - ");
				shopDetailHelper tch = new shopDetailHelper();
				tch.updateshop(request, response);
				return toJson("Data UpDated Successfully");

			}
			
			// Purchase report As Per GST
			public String getGSTPurchaseReport(HttpServletRequest request,
					HttpServletResponse response) {
				GoodsReceiveHelper helper = new GoodsReceiveHelper();
				List categories = helper.getPurchaseDetailByGST(request, response);
				Map<String, List> returnMap = new HashMap<String, List>();
				returnMap.put("list", categories);
				System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
				return toJson(returnMap);
			}
			
			// Purchase return report as per Supplier between two date
			public String getPurchaseReturnDetailsAsPerSupplierBetweenTwoDate(HttpServletRequest request,
					HttpServletResponse response) {
				GoodsReceiveHelper helper = new GoodsReceiveHelper();
				List categories = helper.getPurchaseReturnDetailsAsPerSupplierName(request,
						response);
				Map<String, List> returnMap = new HashMap<String, List>();
				returnMap.put("list", categories);
				System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
				return toJson(returnMap);
			}
			
			// GST sale Summary Report between two dates
			public String gstSummaryReportsBetweenTwoDates(
					HttpServletRequest request, HttpServletResponse response) {
				GoodsReceiveHelper helper = new GoodsReceiveHelper();
				List categories = helper.gstSummaryReportsBetweenTwoDates(
						request, response);
				Map<String, List> returnMap = new HashMap<String, List>();
				returnMap.put("list", categories);
				System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
				return toJson(returnMap);
			}
			
			// GST Purchase Summary Report between two dates
			public String gstPurchaseSummaryReportsBetweenTwoDates(
					HttpServletRequest request, HttpServletResponse response) {
				GoodsReceiveHelper helper = new GoodsReceiveHelper();
				List categories = helper.gstPurchaseSummaryReportsBetweenTwoDates(
						request, response);
				Map<String, List> returnMap = new HashMap<String, List>();
				returnMap.put("list", categories);
				System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
				return toJson(returnMap);
			}
			// Sale Retun report as per Bill
			public String saleReturnReportAsPerBill(
					HttpServletRequest request, HttpServletResponse response) {
				FertilizerBillHelper helper = new FertilizerBillHelper();
				List categories = helper.saleReturnReportAsPerBill(
						request, response);
				Map<String, List> returnMap = new HashMap<String, List>();
				returnMap.put("list", categories);
				System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
				return toJson(returnMap);
			}
			
			// bill no wise report 
			public String bilnowiseReportAsPerBill(
					HttpServletRequest request, HttpServletResponse response) {
				FertilizerBillHelper helper = new FertilizerBillHelper();
				List categories = helper.bilnowiseReportAsPerBillwise(
						request, response);
				Map<String, List> returnMap = new HashMap<String, List>();
				returnMap.put("list", categories);
				System.out.println("$$$$$$$$$$$$$$$$" + returnMap);
				return toJson(returnMap);
			}
			
			
			
			
			
			
			
		
}
