var name;
		var age;
		var data;
		var hasil;

		function biodata(name,age){
			if(name=="Agustin Parmaini" && age==24){
				data = {
					"name" : "Agustin Parmaini",
					"age" : 24,
					"address" : "Jl. Kapten A. Rivai Lorong Karya No 248 Palembang",
					"hobbies" : ["Travelling,","Cooking"],
					"is_married" : false,
					"list_school" : [{
						"SMA" :{
							"name" : "SMA Muhammadiyah 2 Palembang",
							"year_in" : "2010",
							"year_out" : "2013",
							"major" : "IPA"
						},
						"Universitas" : {
							"name" :"STMIK GI MDP Palembang",
							"year_in" : "2013",
							"year_out" : 2017,
							"major" : "S1 Sistem Informasi"
						}
						}],
					"skill" :{
							"skill_name" : [{
									"php" : "beginner",
									"java" : "beginner",
									"javascript" : "beginner",
									"html & css" : "beginner",
									"mysql" : "beginner"
							}]
						},
					"intrest_in_coding" : true

				};
				return JSON.stringify(data);

			}
			else{
				return "Datanya Masih Salah !!";
			}
		}

		hasil = biodata("Agustin Parmaini",24);
		document.write(hasil);