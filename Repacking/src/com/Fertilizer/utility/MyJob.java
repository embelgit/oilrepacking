package com.Fertilizer.utility;

import java.io.File;
import java.io.IOException;

import org.slf4j.LoggerFactory;

public class MyJob{
	File backup = null;
	 public void execute() {
	    try { 

	    	String to="rushabhjain193@gmail.com";
		
			//for fertlizer
	
			//for database backup
			try{
			AutoDatabaseBackupJob data = new AutoDatabaseBackupJob();
			backup = data.mailDatabaseBackup();
			
			}
			catch(IOException e){
				e.printStackTrace();
			}
		    
		    try{
		    	com.Fertilizer.utility.Mailer.sendFile(to,backup);
		  
		    }
		    catch(Exception e){
		    	e.printStackTrace();
		    	
		    }
		    System.out.println("mail sent...");
			
	    } catch (Exception ex) {
	      LoggerFactory.getLogger(getClass()).error(ex.getMessage());
	    }
	  }
}


