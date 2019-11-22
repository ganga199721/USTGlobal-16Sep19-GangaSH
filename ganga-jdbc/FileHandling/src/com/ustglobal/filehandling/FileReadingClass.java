package com.ustglobal.filehandling;

import java.io.FileReader;
import java.io.IOException;

public class FileReadingClass {
	public static void main(String[] args) {

		String path = "C:\\Users\\HP\\Desktop\\text.txt.txt";
		FileReader reader = null;
		try {
			reader = new FileReader(path);
			int i;
			while((i=reader.read())!=-1) {
				System.out.print((char)i);
			}

			int i1 = reader.read();
			char ch1 = (char)i1;
			System.out.print(ch1);

			int i2 = reader.read();
			char ch2 = (char)i2;
			System.out.print(ch2);
		}catch(IOException e){
			e.printStackTrace();
		}


	}
}
