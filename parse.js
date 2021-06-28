const fs = require("fs");

const data = `Location Reports	consolidation report	Sku #	Sku Description	MST	MST Desc	Zone	Loc Class	Location	Qty on Hand	Qty Alloc	Qty to Store	Qty MVIN	Max Cap	Qty MVOT	Case Qty	Pallet Qty	Qty on Hold	Hold to Empty	Depth	Plts	Plts to Fill Loc	Lic Control	Storage Dev Desc																
Location Reports	consolidation report	sku	sku description	mst	mst description	zone	location class	location name	qty on hand	qty alloc	qty to store	qty mvin	max cap	qty mvot	case qty	pallet qty	qty on hold	hold to empty	depth	pallets	pallets to fill loc	lic control	storage dev description																
Location Reports	SKUs with dedicated locs	Location	Item	Sku Description	Dept	Case Qty	Pal Qty	Master Strat	Max Cap	Qty on Hand	Loc Qty Alloc	Tot Qty on Hand	Tot Qty Alloc	Qty to Rec	Qty on Ord	Hold Empty Flg	Location																						
Location Reports	SKUs with dedicated locs	location name	item	sku description	dept	case qty	pal qty	master strategy	max cap	qty on hand	location qty alloc	tot qty on hand	tot qty alloc	qty to rec	qty on ord	hold empty flg	location name																						
Location Reports	Location report with SKU	Location	Sku	Descritption	Mstr Strat	Master Strat Descrip	Dpt	Loc Class	Loc Class Description	Zone	Strg Dev	Strg Dev Description	Ded Type	Pick Seq	Empty Flg	Hold to Emty Flg	case_qty	pal_qty	pal_len	pal_wid	pal_hgt	case_len	case_wid	case_hgt	Qty On-Hand	Max Cap	Lot Control	Qty Alloc	Qty to Store	Qty MovIn	Qty MovOut	Qty On-Hold	Hold Code	Hold Empid	Hold Dt/Tm	Plts			
Location Reports	Location report with SKU	location name	sku	sku description	master strategy	master strategy descrip	dpt	location class	location class description	zone	strg dev	strg dev description	ded type	pick seq	empty flg	hold to emty flg	case_qty	pal_qty	pal_len	pal_wid	pal_hgt	case_len	case_wid	case_hgt	qty on hand	max cap	lot control	qty alloc	qty to store	qty movin	qty movout	qty on hold	hold code	hold empid	hold datetime	pallets			
Location Reports	Storage device	Strg Dev type	Strg Dev Depth	Ded Type	Zone	Zone Descripton	Total Plt Positions	Plt Positions Occupied	Plt Positions Empty	% Plt Positions Occupied	Total Locations	Occupied Locations	Empty Locations	% Locs Occupied	Actual Plts in SD	Max Cap Plts in SD	Loc % Full	# Locs Pick out																					
Location Reports	Storage device	strg dev type	strg dev depth	ded type	zone	zone descripton	total pallet positions	pallet positions occupied	pallet positions empty	% pallet positions occupied	total locations	occupied locations	empty locations	% locations occupied	actual pallets in sd	max cap pallets in sd	location % full	# locations pick out																					
Location Reports	Locations by license and lot control	Strg Dev type	Strg Dev Depth	Ded Type	Zone	Zone Descripton	Total Plt Positions	Plt Positions Occupied	Plt Positions Empty	% Plt Positions Occupied	Total Locations	Occupied Locations	Empty Locations	% Locs Occupied	Actual Plts in SD	Max Cap Plts in SD	Loc % Full	# Locs Pick out																					
Location Reports	Locations by license and lot control	strg dev type	strg dev depth	ded type	zone	zone descripton	total pallet positions	pallet positions occupied	pallet positions empty	% pallet positions occupied	total locations	occupied locations	empty locations	% locations occupied	actual pallets in sd	max cap pallets in sd	location % full	# locations pick out																					
Location Reports	Locations and license	SKU	Location	Loc Class	Zone	License	Model / Lot#	Carton Qty	Pallet Qty	License Qty																													
Location Reports	Locations and license	sku	location name	location class	zone	license	model / lot#	carton qty	pallet qty	license qty																													
Location Reports	Location report	Location	Loc Class	Loc Class Descrip	Loc Code	Zone	Ded Type	Lic Cntrl Flag	Storage Dev Code	Storage Dev Code Description	Location Depth	Location Width	Location Height	Location Wt Limit	Empty Flag	# Item Locators	Pick Seq	Strg Dev type	Stg Dev Loc Depth	Loc Dim Plt Capacty	Strg Func	Storage Function Description																	
Location Reports	Location report	location name	location class	location class descrip	location code	zone	ded type	lic cntrl flag	storage dev code	storage dev code description	location depth	location width	location height	location wt limit	empty flag	# item locators	pick seq	strg dev type	stg dev location depth	location dim pallet capacty	strg func	storage function description																	
IC Maintenance Reports	Allocated no replen	Sku	Description	Master Strat	Location	Ded Type	Hold to Empty	Qty On-Hand	Qty Alloc	Held Alloc	Qty MVIN	Qty to Store	Qty MVOT	Offsite On-Hand	TTL On_ hand	Qty on Hold																							
IC Maintenance Reports	Allocated no replen	sku	sku description	master strategy	location name	ded type	hold to empty	qty on hand	qty alloc	held alloc	qty mvin	qty to store	qty mvot	offsite on hand	ttl on_ hand	qty on hold																							
IC Maintenance Reports	Short/Zero pick report	Date	From Location	SKU	Picker Name	LDAP	Dept	Wave	Work Assignment	Vehicle Class	Cont Num	Qty Ordered	Qty Picked	Loc On-Hand Before	Def Crtn Qty	SKU Ttl On-hand	SKU Ttl On-HOLD	SKU Total Locs	Sku Last Rcpt	Store #	Ord Typ	Outbound Order	Alloc Date	Dock	Status	% Shipped	Type												
IC Maintenance Reports	Short/Zero pick report	date	from location	sku	picker name	ldap	dept	wave	work assignment	vehicle class	cont num	qty ordered	qty picked	location on hand before	def crtn qty	sku ttl on hand	sku ttl on hold	sku total locs	sku last rcpt	store #	ord type	outbound order	allocated date	dock	status	% shipped	type												
IC Maintenance Reports	Over allocated storage	Sku	Description	Mstr Strat	Location	Loc Class	Zone	Qty Alloc	Loc  On-Hand	Qty Move-in																													
IC Maintenance Reports	Over allocated storage	sku	sku description	master strategy	location name	location class	zone	qty alloc	location on hand	qty move in																													
IC Maintenance Reports	Dedicated SKUs with zero on-hand	SKU	Dept	Description	Mstr Strat	Ded Loc	Loc Class	Ttl On-Hand	Qty To Store and Move-In	Qty IB	Last Recpt Date	Date last Picked	# Active Vendors	# In-Season Vendors	# Out-Season Vendors	# Inactive Vendors	# Clearance Vendors	# Delete Vendors	# 0 Vendors																				
IC Maintenance Reports	Dedicated SKUs with zero on-hand	sku	dept	sku description	master strategy	ded loc	location class	ttl on hand	qty to store and move in	qty ib	last recpt date	date last picked	# active vendors	# in season vendors	# out season vendors	# inactive vendors	# clearance vendors	# delete vendors	# 0 vendors																				
IC Maintenance Reports	Full-Pallet allocated from dedicated location	Alloc Date	Store	Turn	Dock	Wrk Func	Veh Class	Zone	WKA	Sku	# Locs for Sku	Mstr Strat	Location	Dt/Time  WKA added																									
IC Maintenance Reports	Full-Pallet allocated from dedicated location	allocated date	store	turn	dock	wrk func	vehicle class	zone	wka	sku	# locations for sku	master strategy	location name	dt/time wka added																									
IC Maintenance Reports	MX WKA Check	Alloc Date	Turn	Dock	Store	Pick WKA	Veh Class	Wrk Func	Location	Sku	Sku's in Location	Sku's on WKA	Sku's on PO	Cases Alloc	PO #	MX Error Check	Current Picker																						
IC Maintenance Reports	MX WKA Check	allocated date	turn	dock	store	pick wka	vehicle class	wrk func	location name	sku	sku's in location	sku's on wka	sku's on po	cases alloc	po #	mx error check	current picker																						
IC Maintenance Reports	Dedicated pick history	Sku	Description	Dept	Ded Type	Ded Loc	Ded On-Hand	Zone	Sku Ttl On-hand	Sku Ttl Plts On-hand	Ttl # Locs	# Ded Locs	Crtns Pick from DedLoc Last 45 Days	Ttl Crtns Picked in  Last 45 days	Ttl Crtns picked in  Last Year	Date Last Recv'd	# Active Vendors	# In-Season Vendors	# Out-Season Vendors	# Inactive Vendors	# Clearance Vendors	# Delete Vendors	# 0 Vendors																
IC Maintenance Reports	Dedicated pick history	sku	sku description	dept	ded type	ded loc	ded on hand	zone	sku ttl on hand	sku ttl pallets on hand	ttl # locs	# ded locs	cartons pick from dedloc last 45 days	ttl cartons picked in last 45 days	ttl cartons picked in last year	date last receive'd	# active vendors	# in season vendors	# out season vendors	# inactive vendors	# clearance vendors	# delete vendors	# 0 vendors																
IC Maintenance Reports	Max Capacity Report	Location	Zone	Loc Class	Sku	Sku Description	Qty  On-Hand	Qty Alloc	Plt Qty	Case Qty	Max Cap	Sku	Location	Plt Qty + 1 Cartons	SHORCUT Key for entry into ITEM/LOCATION-MODIFY																								
IC Maintenance Reports	Max Capacity Report	location name	zone	location class	sku	sku description	qty on hand	qty alloc	pallet qty	case qty	max cap	sku	location name	pallet qty + 1 cartons	shorcut key for entry into item/location modify																								
IC Maintenance Reports	Outbound Shipment Check	Dt/Tm Picked	Sku	Model /  Lot	OB PO	OB Ord Type	Picker	Wrk Func	Pick Cont	Qty  Sched	Qty  Picked	From  Loc	Veh  Cls	Veh  Type	Cube of SKU	Cube of PO	Ship  DC	Alloc Dt	Recv  Str/DC	Turn	Dock	FB #	BOL #	Carr	Trailer #	PO  Type	Item Description												
IC Maintenance Reports	Outbound Shipment Check	datetime picked	sku	model / lot	ob po	ob ord type	picker	wrk func	pick cont	qty sched	qty picked	from loc	vehicle cls	vehicle type	cube of sku	cube of po	ship dc	allocated datetime	receive str/dc	turn	dock	fb #	bol #	carr	trailer #	po type	item description												
IC Maintenance Reports	Master License Validation	Sku	Location	License #	Lot	Qty	Qty Alloc	Location On-Hand before	Function and Emp Id	Time Completed																													
IC Maintenance Reports	Master License Validation	sku	location name	license #	lot	qty	qty alloc	location on hand before	function and emp id	time completed																													
IC Maintenance Reports	License Issue	License	Master License	Lot #	Sku	Lic Qty	License Location	Inbound PO#	Last Recv Dt	Last Putw Date-Location	Last Repl Date-Location	ItemLoc Location	ItemLoc Sku	Itemloc On-Hand	Stage Location	Wrk Func Code	Dt/Tm Added	Replen Queue Chk	Putaway Queue Chk																				
IC Maintenance Reports	License Issue	license	master license	lot #	sku	lic qty	license location	inbound po#	last receive datetime	last putw date location	last repl date location	itemloc location	itemloc sku	itemloc on hand	stage location	wrk func code	datetime added	replen queue chk	putaway queue chk																				
IC Maintenance Reports	Staged License Cleanup	Cleanup Staged Work Assignment			Cleanup Putaway License			Date	Stage Location	Work Type																													
IC Maintenance Reports	Staged License Cleanup	cleanup staged work assignment			cleanup putaway license			date	stage location	work type																													
IC Maintenance Reports	Report Email Address	Rpt ID	Report Name	Vendor #	Vendor Name	CN Flg	E-mail Address																																
IC Maintenance Reports	Report Email Address	rpt id	report name	vendor #	vendor name	cn flg	e mail address																																
IC Maintenance Reports	Recycled PO Check	Inbound PO	Inbound Load #	Inbound Order Type	Status	Vendor #	Vendor Name	Sku	Description	Dept	Model / Lot	Model/Lot Vendor Name	Qty Ord	Qty Received	Orig PO Create Date																								
IC Maintenance Reports	Recycled PO Check	inbound po	inbound load #	inbound order type	status	vendor #	vendor name	sku	sku description	dept	model / lot	model/lot vendor name	qty ord	qty received	orig po create date																								
IC Accuracy Reports	Adjust Summary Detail	Adj Date & time	Day	Sku	Description	Dept	Adj Loc	Model/ Lot	License	New Qty	Orig Qty	Qty Adj	Adjust Cost	ABS Adjust Cost	Crtns Adj	ABS Crtns	Adj  Code	Adjustment Description	Emp ID	Wrk Fnc																			
IC Accuracy Reports	Adjust Summary Detail	adj date & time	day	sku	sku description	dept	adj loc	model/ lot	license	new qty	orig qty	qty adj	adjust cost	abs adjust cost	cartons adj	abs cartons	adj code	adjustment description	emp id	wrk fnc																			
IC Accuracy Reports	Cycle Count Progress	Week Ind	Week Start	Week End	Expected Qty	Actual Qty	Inv Accuracy %	Locations Counted	Locations in Error	Location Accuracy %	Expected $$	Actual $$	$$ Inv Accuracy %	Empty Locs Counted	Work Fnc Code	# AUTO WKA	TTL # WKA	# Locations	Zone	Work Fnc Code	# AUTO WKA	TTL # WKA	# Locations	Count Dt/Tm	Sku	Sku Desc	Location	Model/ Lot	Orig Emp ID	Emp ID	Wrk Func	Orig Qty	Count Qty	Variance	Vari $$	WKA	Adj Code	Adj Desc	Week Ind
IC Accuracy Reports	Cycle Count Progress	week ind	week start	week end	expected qty	actual qty	inv accuracy %	locations counted	locations in error	location accuracy %	expected $$	actual $$	$$ inv accuracy %	empty locations counted	work fnc code	# auto wka	ttl # wka	# locations	zone	work fnc code	# auto wka	ttl # wka	# locations	count datetime	sku	sku description	location name	model/ lot	orig emp id	emp id	wrk func	orig qty	count qty	variance	vari $$	wka	adj code	adj description	week ind
IC Accuracy Reports	SKU History Research	Description	Unit Cost	Lot Cntrl	Lic Cntrl	Locations in building	Quantity On Hand	Quantity Allocated	Open Order Qty	# of Open Orders	45 day Pick Hist	45 day Recv Hist	Putaway History	IB Qty On Order	CCA Manual	CCA RF	Total CCA	CCA Loss/Gain																					
IC Accuracy Reports	SKU History Research	sku description	unit cost	lot cntrl	lic cntrl	locations in building	quantity on hand	quantity allocated	open order qty	# of open orders	45 day pick hist	45 day receive hist	putaway history	ib qty on order	cca manual	cca rf	total cca	cca loss/gain																					
IC Accuracy Reports	Cycle Count Printout	WKA #	Item #	Location	WFC	Type	Zone	Date	WKA Barcode																														
IC Accuracy Reports	Cycle Count Printout	wka #	item #	location name	wfc	type	zone	date	wka barcode																														
IC Accuracy Reports	Putaway By Inbound Load	License	Sku	Qty	To Loc	Loc Strg Fnc	Putaway ID	Dt/Tm Putw	Recv ID	Dt/Tm Recv	Sku Description																												
IC Accuracy Reports	Putaway By Inbound Load	license	sku	qty	to loc	location strg fnc	putaway id	datetime putw	receive id	datetime receive	sku description																												
IC Accuracy Reports	Location History	Work Type	Dt/Tm	Location	Sku	Emp ID	Name	Qty Sched	Qty Actual	On-Hand Before	On-Hand After	License or WKA #																											
IC Accuracy Reports	Location History	work type	datetime	location name	sku	emp id	name	qty sched	qty actual	on hand before	on hand after	license or wka #																											
Slotting Reports	SKU Pick History	Sku	Description	Mstr Strat-Desc	Total Qty	Ttl Crtns	CP Crtns	# CP WKA	CP Plts	CP Cube	FP Crtns	# FP WKA	FP Plts	FP Cube	% CP	Build On																							
Slotting Reports	SKU Pick History	sku	sku description	mstr strategy description	total qty	ttl cartons	cp cartons	# cp wka	cp pallets	cp cube	fp cartons	# fp wka	fp pallets	fp cube	% cp	build on																							
Slotting Reports	SKUs on Order/Location	Sku	Sku Description	PO Type	Mstr Strat	Mstr Strat Desc	Ded Loc	Dept	Cs Qty	Plt Qty	Max Cap	Max Cap Plts	Total  On-Hand	Plts  On-Hand	Crtns On Order	FP Crtns	CP Crtns	FP Plts	CP Plts	Ded Loc Turns																			
Slotting Reports	SKUs on Order/Location	sku	sku description	po type	master strategy	mstr strategy description	ded loc	dept	cs qty	pallet qty	max cap	max cap pallets	total on hand	pallets on hand	cartons on order	fp cartons	cp cartons	fp pallets	cp pallets	ded location turns																			
SKU/Item Reports	Item Configuration Report	SDC	SKU	DESC	DEPT	ITM CONFIG SEQ	CASE QTY	CASE LENGTH	CASE WIDTH	CASE HEIGHT	CASE WGT	CASE CUBE	PLT QTY	PLT LENGTH	PLT WIDTH	PLT HEIGHT	PLT WEIGHT	PLT CUBE	QTY ON HAND	DEF REC CRTN QTY	DEF PIK CRTN QTY	TI	HI	LAYER QTY	MASTER STRAT	BUILD ON	STACK LMT	UNIT VALUE	LAST CYCLE CNT	LAST STG LOC	LAST DT RCVD								
SKU/Item Reports	Item Configuration Report	sdc	sku	description	dept	itm config seq	case qty	case length	case width	case height	case wgt	case cube	pallet qty	pallet length	pallet width	pallet height	pallet weight	pallet cube	qty on hand	def rec crtn qty	def pik crtn qty	ti	hi	layer qty	master strategy	build on	stack lmt	unit value	last cycle cnt	last stg loc	last dt rcvd								
SKU/Item Reports	SKUs on hold report	Sku	Description	Location	Model Lot	Case Qty	Hold On Rcpt	Hold Code	Location On-Hand	Location Qty On-Hold	Emp Id	Dt Tm Added	MX Loc Chk (# Skus)																										
SKU/Item Reports	SKUs on hold report	sku	sku description	location name	model lot	case qty	hold on rcpt	hold code	location on hand	location qty on hold	emp id	datetime added	mx location chk (# skus)																										
Miscellaneous Reports	Move Report	Zn	Veh Typ - Func	Repl Wka	WKA Bar Code	Ovr Hld	Status	Sku	From Loc	Qty	Plts	To Loc	Loc  On-Hand	Loc MaxCap	Stage Location	Stage License	Trailer #	Yard Loc	Master Strat - Description																				
Miscellaneous Reports	Move Report	zone	vehicle type func	repl wka	wka bar code	ovr hld	status	sku	from loc	qty	pallets	to loc	location on hand	location maxcap	stage location	stage license	trailer #	yard loc	master strategy description																				
Miscellaneous Reports	Problem Resolution	Dt/Tm Added	License	Wrk Fnc	Pri	Prob Typ	User Prob Typ	Problem Description	Orig Emp	Tran #	Status	Status Desc	Yard Loc	Trailer #	IB Load #	Model - Lot	Sku	Mstr Strat	Sku Desc	Qty	Rcv Case Qty	Rcv Plt Qty	Location	PR Location	WKA	FIFO Dt	Hold Code Flg	Rtn Flg	Dmg Flg	Rcv Pt	Hot Itm Flg	SRC DOC NUM							
Miscellaneous Reports	Problem Resolution	datetime added	license	wrk fnc	pri	prob type	user prob type	problem description	orig emp	tran #	status	status description	yard loc	trailer #	ib load #	model lot	sku	master strategy	sku description	qty	rcv case qty	rcv pallet qty	location name	pr location	wka	fifo datetime	hold code flg	rtn flg	dmg flg	rcv pt	hot itm flg	src doc num							
Miscellaneous Reports	Yard Report	Yard Loc	Loc Type	Loc Hold	Trailer #	SCAC	Trlr Status	Arrival	Inb / Outb	Empty/ Full	OB Frt bill	Hold Code	Storage Trailer Contents	Catalyst Location	YMS Load #	Val Code																							
Miscellaneous Reports	Yard Report	yard loc	location type	location hold	trailer #	scac	trailer status	arrival	inb / outb	empty/ full	ob freight bill	hold code	storage trailer contents	catalyst location	yms load #	val code																							
Miscellaneous Reports	Outbound PO Report	Store #	Str Type	Create Dt/Tm	Age	Alloc Dt	Dock	Status	PO #	PO Typ	Crtns	Cube	Order Type	Type Desc																									
Miscellaneous Reports	Outbound PO Report	store #	str type	create datetime	age	allocated datetime	dock	status	po #	po type	cartons	cube	order type	type description																									`;

const matrix = data.split("\n").map((row) => row.split("\t"));

const colToReport = [];
const colToCategory = [];

for (let i = 1; i < matrix.length - 1; i += 2) {
  const row = matrix[i];

  for (let j = 2; j < row.length; j++) {
    const [category, report, column] = [row[0], row[1], row[j]];
    if (column.trim()) {
      if (!colToReport.find(([col, rep]) => col === column && rep === report)) {
        colToReport.push([column, report, 1]);
      }
      if (
        !colToCategory.find(([col, cat]) => col === column && cat === category)
      ) {
        colToCategory.push([column, category, 1]);
      }
    }
  }
}

fs.writeFileSync(
  "/Users/zzzsss/Desktop/col-to-report.json",
  JSON.stringify(colToReport, null, 2)
);
fs.writeFileSync(
  "/Users/zzzsss/Desktop/col-to-category.json",
  JSON.stringify(colToCategory, null, 2)
);
