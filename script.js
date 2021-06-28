const fs = require("fs");

const data = `Sku #	Sku Description	MST	MST Desc	Zone	Loc Class	Location	Qty on Hand	Qty Alloc	Qty to Store	Qty MVIN	Max Cap	Qty MVOT	Case Qty	Pallet Qty	Qty on Hold	Hold to Empty	Depth	Plts	Plts to Fill Loc	Lic Control	Storage Dev Desc																
																																					
Location	Item	Sku Description	Dept	Case Qty	Pal Qty	Master Strat	Max Cap	Qty on Hand	Loc Qty Alloc	Tot Qty on Hand	Tot Qty Alloc	Qty to Rec	Qty on Ord	Hold Empty Flg	Location																						
																																					
Location	Sku	Descritption	Mstr Strat	Master Strat Descrip	Dpt	Loc Class	Loc Class Description	Zone	Strg Dev	Strg Dev Description	Ded Type	Pick Seq	Empty Flg	Hold to Emty Flg	case_qty	pal_qty	pal_len	pal_wid	pal_hgt	case_len	case_wid	case_hgt	Qty On-Hand	Max Cap	Lot Control	Qty Alloc	Qty to Store	Qty MovIn	Qty MovOut	Qty On-Hold	Hold Code	Hold Empid	Hold Dt/Tm	Plts			
																																					
Strg Dev type	Strg Dev Depth	Ded Type	Zone	Zone Descripton	Total Plt Positions	Plt Positions Occupied	Plt Positions Empty	% Plt Positions Occupied	Total Locations	Occupied Locations	Empty Locations	% Locs Occupied	Actual Plts in SD	Max Cap Plts in SD	Loc % Full	# Locs Pick out																					
																																					
Strg Dev type	Strg Dev Depth	Ded Type	Zone	Zone Descripton	Total Plt Positions	Plt Positions Occupied	Plt Positions Empty	% Plt Positions Occupied	Total Locations	Occupied Locations	Empty Locations	% Locs Occupied	Actual Plts in SD	Max Cap Plts in SD	Loc % Full	# Locs Pick out																					
																																					
SKU	Location	Loc Class	Zone	License	Model / Lot#	Carton Qty	Pallet Qty	License Qty																													
																																					
Location	Loc Class	Loc Class Descrip	Loc Code	Zone	Ded Type	Lic Cntrl Flag	Storage Dev Code	Storage Dev Code Description	Location Depth	Location Width	Location Height	Location Wt Limit	Empty Flag	# Item Locators	Pick Seq	Strg Dev type	Stg Dev Loc Depth	Loc Dim Plt Capacty	Strg Func	Storage Function Description																	
																																					
Sku	Description	Master Strat	Location	Ded Type	Hold to Empty	Qty On-Hand	Qty Alloc	Held Alloc	Qty MVIN	Qty to Store	Qty MVOT	Offsite On-Hand	TTL On_ hand	Qty on Hold																							
																																					
Date	From Location	SKU	Picker Name	LDAP	Dept	Wave	Work Assignment	Vehicle Class	Cont Num	Qty Ordered	Qty Picked	Loc On-Hand Before	Def Crtn Qty	SKU Ttl On-hand	SKU Ttl On-HOLD	SKU Total Locs	Sku Last Rcpt	Store #	Ord Typ	Outbound Order	Alloc Date	Dock	Status	% Shipped	Type												
																																					
Sku	Description	Mstr Strat	Location	Loc Class	Zone	Qty Alloc	 Loc  On-Hand	Qty Move-in																													
																																					
SKU	Dept	Description	Mstr Strat	Ded Loc	Loc Class	Ttl On-Hand	Qty To Store and Move-In	Qty IB	Last Recpt Date	Date last Picked	# Active Vendors	# In-Season Vendors	# Out-Season Vendors	# Inactive Vendors	# Clearance Vendors	# Delete Vendors	# 0 Vendors																				
																																					
Alloc Date	Store	Turn	Dock	Wrk Func	Veh Class	Zone	WKA	Sku	# Locs for Sku	Mstr Strat	Location	Dt/Time  WKA added																									
																																					
Alloc Date	Turn	Dock	Store	Pick WKA	Veh Class	Wrk Func	Location	Sku	Sku's in Location	Sku's on WKA	Sku's on PO	Cases Alloc	PO #	MX Error Check	Current Picker																						
																																					
Sku	Description	Dept	Ded Type	Ded Loc	Ded On-Hand	Zone	Sku Ttl On-hand	Sku Ttl Plts On-hand	Ttl # Locs	# Ded Locs	Crtns Pick from DedLoc Last 45 Days	Ttl Crtns Picked in  Last 45 days	Ttl Crtns picked in  Last Year	Date Last Recv'd	# Active Vendors	# In-Season Vendors	# Out-Season Vendors	# Inactive Vendors	# Clearance Vendors	# Delete Vendors	# 0 Vendors																
																																					
Location	Zone	Loc Class	Sku	Sku Description	Qty  On-Hand	Qty Alloc	Plt Qty	Case Qty	Max Cap	Sku	Location	Plt Qty + 1 Cartons	SHORCUT Key for entry into ITEM/LOCATION-MODIFY																								
																																					
Dt/Tm Picked	Sku	Model /  Lot	OB PO	OB Ord Type	Picker	Wrk Func	Pick Cont	Qty  Sched	Qty  Picked	From  Loc	Veh  Cls	Veh  Type	Cube of SKU	Cube of PO	Ship  DC	Alloc Dt	Recv  Str/DC	Turn	Dock	FB #	BOL #	Carr	Trailer #	PO  Type	Item Description												
																																					
Sku	Location	License #	Lot	Qty	Qty Alloc	Location On-Hand before	Function and Emp Id	Time Completed																													
																																					
License	Master License	Lot #	Sku	Lic Qty	License Location	Inbound PO#	Last Recv Dt	Last Putw Date-Location	Last Repl Date-Location	ItemLoc Location	ItemLoc Sku	Itemloc On-Hand	Stage Location	Wrk Func Code	Dt/Tm Added	Replen Queue Chk	Putaway Queue Chk																				
																																					
Cleanup Staged Work Assignment			Cleanup Putaway License			Date	Stage Location	Work Type																													
																																					
Rpt ID	Report Name	Vendor #	Vendor Name	CN Flg	E-mail Address																																
																																					
Inbound PO	Inbound Load #	Inbound Order Type	Status	Vendor #	Vendor Name	Sku	Description	Dept	Model / Lot	Model/Lot Vendor Name	Qty Ord	Qty Received	Orig PO Create Date																								
																																					
Adj Date & time	Day	Sku	Description	Dept	Adj Loc	Model/ Lot	License	New Qty	Orig Qty	Qty Adj	Adjust Cost	ABS Adjust Cost	Crtns Adj	ABS Crtns	Adj  Code	Adjustment Description	Emp ID	Wrk Fnc																			
																																					
Week Ind	Week Start	Week End	Expected Qty	Actual Qty	Inv Accuracy %	Locations Counted	Locations in Error	Location Accuracy %	Expected $$	Actual $$	$$ Inv Accuracy %	Empty Locs Counted	Work Fnc Code	# AUTO WKA	TTL # WKA	# Locations	Zone	Work Fnc Code	# AUTO WKA	TTL # WKA	# Locations	Count Dt/Tm	Sku	Sku Desc	Location	Model/ Lot	Orig Emp ID	Emp ID	Wrk Func	Orig Qty	Count Qty	Variance	Vari $$	WKA	Adj Code	Adj Desc	Week Ind
																																					
Description	Unit Cost	Lot Cntrl	Lic Cntrl	Locations in building	Quantity On Hand	Quantity Allocated	Open Order Qty	# of Open Orders	45 day Pick Hist	45 day Recv Hist	Putaway History	IB Qty On Order	CCA Manual	CCA RF	Total CCA	CCA Loss/Gain																					
																																					
WKA #	Item #	Location	WFC	Type	Zone	Date	WKA Barcode																														
																																					
License	Sku	Qty	To Loc	Loc Strg Fnc	Putaway ID	Dt/Tm Putw	Recv ID	Dt/Tm Recv	Sku Description																												
																																					
Work Type	Dt/Tm	Location	Sku	Emp ID	Name	Qty Sched	Qty Actual	On-Hand Before	On-Hand After	License or WKA #																											
																																					
Sku	Description	Mstr Strat-Desc	Total Qty	Ttl Crtns	CP Crtns	# CP WKA	CP Plts	CP Cube	FP Crtns	# FP WKA	FP Plts	FP Cube	% CP	Build On																							
																																					
Sku	Sku Description	PO Type	Mstr Strat	Mstr Strat Desc	Ded Loc	Dept	Cs Qty	Plt Qty	Max Cap	Max Cap Plts	Total  On-Hand	Plts  On-Hand	Crtns On Order	FP Crtns	CP Crtns	FP Plts	CP Plts	Ded Loc Turns																			
																																					
SDC	SKU	DESC	DEPT	ITM CONFIG SEQ	CASE QTY	CASE LENGTH	CASE WIDTH	CASE HEIGHT	CASE WGT	CASE CUBE	PLT QTY	PLT LENGTH	PLT WIDTH	PLT HEIGHT	PLT WEIGHT	PLT CUBE	QTY ON HAND	DEF REC CRTN QTY	DEF PIK CRTN QTY	TI	HI	LAYER QTY	MASTER STRAT	BUILD ON	STACK LMT	UNIT VALUE	LAST CYCLE CNT	LAST STG LOC	LAST DT RCVD								
																																					
Sku	Description	Location	Model Lot	Case Qty	Hold On Rcpt	Hold Code	Location On-Hand	Location Qty On-Hold	Emp Id	Dt Tm Added	MX Loc Chk (# Skus)																										
																																					
Zn	Veh Typ - Func	Repl Wka	WKA Bar Code	Ovr Hld	Status	Sku	From Loc	Qty	Plts	To Loc	Loc  On-Hand	Loc MaxCap	Stage Location	Stage License	Trailer #	Yard Loc	Master Strat - Description																				
																																					
Dt/Tm Added	License	Wrk Fnc	Pri	Prob Typ	User Prob Typ	Problem Description	Orig Emp	Tran #	Status	Status Desc	Yard Loc	Trailer #	IB Load #	Model - Lot	Sku	Mstr Strat	Sku Desc	Qty	Rcv Case Qty	Rcv Plt Qty	Location	PR Location	WKA	FIFO Dt	Hold Code Flg	Rtn Flg	Dmg Flg	Rcv Pt	Hot Itm Flg	SRC DOC NUM							
																																					
Yard Loc	Loc Type	Loc Hold	Trailer #	SCAC	Trlr Status	Arrival	Inb / Outb	Empty/ Full	OB Frt bill	Hold Code	Storage Trailer Contents	Catalyst Location	YMS Load #	Val Code																							
																																					
Store #	Str Type	Create Dt/Tm	Age	Alloc Dt	Dock	Status	PO #	PO Typ	Crtns	Cube	Order Type	Type Desc																									
																																					`;

const matrix = data.split("\n").map((row) => row.split("\t"));

console.log(matrix.length);

for (let i = 0; i < matrix.length - 1; i += 2) {
  const row = matrix[i];
  const newRow = matrix[i + 1];
  for (const j in row) {
    let translated = row[j].toLowerCase().trim();
    translated = translated
      .replace(/-/g, " ")
      .replace("recv", "receive")
      .replace("crtns", "cartons")
      .replace("descritption", "description")
      .replace("plts", "pallets")
      .replace("zn", "zone")
      .replace("trlr", "trailer")
      .replace(/dt$/g, "datetime")
      .replace(/(^|\W)frt(\W)/g, "$1freight$2")
      .replace(/(^|\W)plt(\W)/g, "$1pallet$2")
      .replace(/(^|\W)loc(\W)/g, "$1location$2")
      .replace(/(^|\W)locs(\W)/g, "$1locations$2")
      .replace(/(^|\W)alloc(\W)/g, "$1allocated$2")
      .replace(/on-hand/g, "on hand")
      .replace(/dt.tm\w*/g, "datetime")
      .replace(/-/g, " ")
      .replace(/^description$/g, "sku description")
      .replace(/^mstr strat$/g, "master strategy")
      .replace(/strat(\W|$)/g, "strategy$1")
      .replace(/desc(\W|$)/g, "description$1")
      .replace(/veh(\W|$)/g, "vehicle$1")
      .replace(/typ(\W|$)/g, "type$1")
      .replace(/^location$/g, "location name")
      .replace(/\s{2,}/g, " ")
      .replace(/(?<=sku) #/g, "");
    newRow[j] = translated;
  }
}
console.log(Math.random());

fs.writeFileSync(
  "/Users/zzzsss/Desktop/columns.aaa",
  matrix.map((row) => row.join("\t")).join("\n")
);
