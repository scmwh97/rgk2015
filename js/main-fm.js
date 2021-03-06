/*!
	Horizonal Unique Creative OnePage Bootstrap HTML5
	Copyright (c) 2013, Subramanian 

	Author: Subramanian
	Profile: themeforest.net/user/FMedia/

	Version: 1.0.0
	Release Date: September 2013
	
	Built using: jQuery 		version:1.6.2	http://jquery.com/
	jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
	
 */


(function( $ ){	
		  
	"use strict"; 
	
	function mainFm(selector, params){
		
		var defaults = $.extend({}, {
				
				// default variables
				
				onePage : true,						// Set whether this template will work as one page or separate page 				
				
				currentPage : "!home",					// Set the current page

				animationSpeed : 1000,				// Default animation speed
				
				slideshowSpeed : 5000,				// Flexslider slideshow delaytime on porfolio detail page 
				
				homeSliderThumbnail : false,			// Home slider thumbnail 
				
				portfolioAutoOpen : false
				
			} , params);

			
// Initialize required variables and objects

			var self = this;
			
			
			self.onePage = $("body").hasClass("not_onepage_ver") ? false : true;	
			
			self.screenWidth =  window.innerWidth;
			
			self.homePage = defaults.currentPage === "" ? "!home" : defaults.currentPage;		
			
			self.aniDelay = 50;
			
			self.stageWidth =  window.innerWidth;
			self.stageHeight =  window.innerHeight;

			self.winWidth =  self.stageWidth;
			self.winHeight =  self.stageHeight;

			self.selEle = $(selector);
			self.IEbrowser = $.browser.msie;
			self.mobile = self.stageWidth <= 959;
			self.midMobile = self.stageWidth <= 767 && self.stageWidth > 479;
			self.minMobile = self.stageWidth <= 480;
			self.mobileDevice = self.screenWidth < 1024 && screen.height < 1024;
			ipad = (self.stageWidth === 768 || self.stageHeight === 768) && (self.stageWidth === 1024 || self.stageHeight === 1024) ;
			self.ipadPort = (self.stageWidth >= 768 &&  self.stageWidth < 1024);
			self.navTop = self.stageWidth <= 959;	
			self.StgHig = iPhoneDevice ? screen.height-60 : self.winHeight;
			
			lowResDesktop = self.stageWidth <= 979;
						
			self.lowMobile = self.stageWidth < 768;

			self.aniSpeed = defaults.animationSpeed;
			self.flxDelay =  flxDelay = defaults.slideshowSpeed;
			
			/* Enable/Disable page content animaation*/				
			self.disableAnimation =  isTouch || self.screenWidth < 1025 ? true : false;			
		//	self.disableAnimation = true;
			
			self.headerMc = $(".header");	
			
			self.headHig = pageHeaderHeight_mini;
			
			self.curPgChk = undefined;								
			self.isoAniFin = false;	
			
			self.txtAniTim = [];
			
			self.supportScrollBar = true;
			
			self.softDrag = self.IEbrowser ? true : false;	
			
			self.bdy = $("body");
			self.htmlBody = $(" body");
			self.foot = $(".footer");	
			self.foter_close = $(".footer_close")	
			self.navUl = $('.nav');
						
			self.pgNexPre = $(".previousPage, .nextPage")
			self.pgUp = $(".pgScrollUp");
			
			self.homeMenuAdded = $(".homeMenu").length > 0 ? true : false;
			
			self.bdy.data("width", Number($(window).width()));
			self.bdy.data("height", Number($(window).height()));

			self.pageLoaded = false;
			self.homePage = defaults.currentPage;
			self.pageLoadfinished = false;
			self.projFm = false;
			self.apis = [];
			self.ff = -1;
			
			self.ContPgTopSpace = 360;
			self.homeTypeAnimateFinish = false;
			
			self.menuTopSpace = 50;
			
			self.tutorial = false;			
			self.firDrag = false;
			
			self.singleBg = true;
			
			$(".itemOver").attr({"aria-haspopup":"true"});
			$(".overlay").attr({"aria-haspopup":"true"});
			$(".popup_overlay").attr({"aria-haspopup":"true"});
			
			
			var eventHoverMc = ('ontouchstart' in document.documentElement) ? 'touchend' : 'mouseover';
			var eventHoutMc = ('ontouchstart' in document.documentElement) ? 'mouseleave' : 'mouseleave';
			
			
			self.eventHoverMc = ('ontouchstart' in document.documentElement) ? 'touchend' : 'mouseover';
			self.eventHoutMc = ('ontouchstart' in document.documentElement) ? 'mouseleave' : 'mouseleave';
			self.eventClickMc = ('ontouchstart' in document.documentElement) ? 'touchend' : 'mousedown';
			
			
			self.isTouchMove = false;
			self.isAddedHover = false;
			
			if(isTouch){	
				try {
					$("body").find(".itemOver").each(function() {				
						var mcBt = $(this);						
						this.ontouchstart = function(e) {						
							self.isTouchMove = false;
								return true;
							};
						this.ontouchend = function(e) {	
							$(".itemOver.addHover").removeClass("addHover");
							if(!self.isTouchMove){
								$(this).addClass("addHover");
							}
							self.isTouchMove = false;
							return true;
						};	
						
						this.ontouchmove = function(e) {
							self.isTouchMove = true;
							return true;
						};					
					});
					self.isAddedHover = true;	
				}catch(e){					
					self.isAddedHover = false;					
				}
			}
				
			if(!isTouch || !self.isAddedHover){
				$(".itemOver").on(self.eventHoverMc, function(event) {
					$(".itemOver.addHover").removeClass("addHover");
					$(this).addClass("addHover");
				});				
				$(".itemOver").on(self.eventHoutMc, function(event) {
					$(this).removeClass("addHover");
				});
			}	
			
			
			self.cM = $('.contentWrapper [data-id="'+"#"+self.homePg+'"]').parent();
			self.cM_= $('.contentWrapper [data-id="'+"#"+self.homePg+'"]');
			
			self.hSlider = $(".homeSlider");
			self.hSliderResp = $(".homeSlider .fullHeight.fullResponse");
			self.hSliderVid = $(".homeSlider .fullHeight.fullResponse .video_content.backGroundVideo");
			
			$(".mainContent_holder").css({"top": 0});
			
			self.siteImageLoadingFinish = false;

			
			// create Menu fadeout layer
			self.headerFad = $(".pageFade");
			self.contClose = $(".closeBtn");	

			self.centerContent = $(".homePageContent .centerPosition").length > 0 ? $(".homePageContent .centerPosition") : undefined;
			self.loadBarTop = $(".pageFade .top_bar");
			self.loadBarBot = $(".pageFade .bottom_bar");


			self.bdy.prepend('<div id="dumDiv" style="position:absolute"> </div>');	
			self.dumDiv = self.bdy.children(':first-child');
			
			
			$('body').find('.flexSlideshow').each(function(){
				  $(this).data("loaded", false);
			});
			
			
			self.conArry = [];
			$("body").find('.contentWrapper').each(function(){
				self.conArry.push($(this));				
			});	
			
			self.navArry = [];
			$('.contentWrapper').each(function(){
				var n_spt = $(this);
				if(n_spt.attr("data-id") !== undefined){
					self.navArry.push($(this));
				}					
			});			
			
			for(var ik=0; ik < self.navArry.length; ik++){
				self.navArry[ik].addClass("enablHardwareAcc");
			}
			
			
			// Store variable to identify animate objects
			for(var ab=0; ab < self.conArry.length; ab++){
				var mcc = self.conArry[ab];				
				 
				 var biVid = [];
				 self.conArry[ab].find('.big_video').each(function(i){
					 biVid[i] = $(this);
				 });
				 self.conArry[ab].data("biVid", biVid);
			};
				  
			
			// Store variable to identify animate objects holding content animation  
			for(var ab=0; ab < self.conArry.length; ab++){				
				var main_holder = self.conArry[ab];
				main_holder.find('[data-animated-in]').each(function(){
					var aniMc = $(this);	
					aniMc.data("isAniObj", false);				
					aniMc.data("main_holder", main_holder);
											
					if(aniMc.find('.graph_container').length > 0){
						aniMc.data("isAniObj", true);						
					}
										
					if(aniMc.find('.animate_counter').length > 0){
						aniMc.data("isAniObj", true);
					}	
					
					if(aniMc.find('.big_video').length > 0){
						aniMc.data("isVidObj", true);
					}	
					
				});	
							  
				main_holder.find('[data-animated-innerContent]').each(function(){
					$(this).children().each(function(){
						$(this).data("main_holder",main_holder);
					});					  
				});
								
			};
			
			// Hide animate objects
			if(!self.disableAnimation){
				$("body").find('[data-animated-in]').css({"visibility":"hidden"});	
				
				$("body").find('[data-animated-innerContent]').each(function(){
					  $(this).children().css({"visibility":"hidden"});
				});
			}
			
			
			
			// Initialize preview setting
			self.previewSetting();
			
			
			// Scroll bar added for require div
			
			if(!isTouch){
				self.addScrollbar();
			}else{
				self.htmlBody.css({ "-webkit-overflow-scrolling": "touch"});				
			}
			
	//		$(".homePageContent").prepend($(".overlayBg.forHomepage"));
			
			// Initialize niceScroll to html
			if(!isTouch && !self.IEbrowser && self.supportScrollBar ){	
				self.nicScrl = $("html").niceScroll({ zindex : 92200000, styler:"fb", cursorborder : "0px",scrollspeed : 100, cursorminheight:100 , cursorwidth:"10px", horizrailenabled:false });
			}else{
				$("html").addClass("forceAddScr");
				$("body").addClass("forceAddScr");
			}
						
			// Initialize the site after the required time interval
			
			self.superSlider = typeof superGalleryInit !== "undefined" && typeof superGalleryInit !== undefined;
						
			self.superSliderInt;
			
			if(!lowResDesktop){
				self.hSlider.css({"visibility":"visible", "height": self.StgHig});
				self.hSliderResp.css({"min-height": self.StgHig});
				self.hSliderVid .css({"min-height": self.StgHig});	
			}else{
				self.hSlider.css({"visibility":"hidden", "height":"0px"});
			}
			
			setTimeout(function(){
				
				if(self.superSlider){
					superGalleryInit();
					if(!supersizedOnBody){
						$(".supersized_gallery").show();
						$("#superNav").show();
						$(".supersized-nav").show();
					}
					
					$('.palyPause_slideshow').on("mouseover", function(){ 
						clearInterval(self.superSliderInt);
					});
					$('.palyPause_slideshow').on("mouseleave", function(){ 
						clearInterval(self.superSliderInt);
						self.superSliderInt = setInterval(function(){
							clearInterval(self.superSliderInt);					
						}, 1000);
											
					});
				}				
				
			},500);
			
		//	$("#supersized").css({"opacity":0});
			
			self.bdy.css("display","block");
			if(window.innerWidth > 979){
				$(".homeTextloadInDesktop").append($('.centerPosition'));	
			}else{
				$(".homeTextloadInMobile").append($('.centerPosition'));	
			}						

			
			if($(".homePageContent").find(".addVideo").length>0 || $(".homePageContent").find(".big_video").length>0){
				$(".homePageContent").addClass("removeBg");
			}
			
		// Home Typing text
			self.homeTypeText = $(".homePageContent .typing_text");
			
			// Push all the preload image into a preloadImages array			
			self.preloadImages = [];
			
			$('.preload').each(function(){
				self.preloadImages.push($(this));
			});
				
			$('.preloadimages_inline img').each(function(){
				var th = $(this);
				var img;
				if(th.hasClass("cssBackground")){
					img = retinaDevice ? $(this).attr("data-src-2x") : $(this).attr("data-src");					
				}else{
					img = window.innerWidth > 767 ? $(this).attr("data-src") : ($(this).attr("data-src-small")? $(this).attr("data-src-small")  : $(this).attr("data-src"));
					}
				th.attr("data-src", img);
				th.addClass("preload");
				self.preloadImages.push(th);
			});
			
			self.imgFinished = 0;			
			
			
			if( self.preloadImages.length>0){
				self.intImgLoad(self.preloadImages[self.imgFinished]);
			}else{
				siteStartOpen = true;
			}
			
	
			var intV = setInterval(function() {								
				  if(siteStartOpen){
					  clearInterval(intV);					  
					  setTimeout( function(){
						$(".header").show();
						$(".homeSlider .homepage_con").show();						 
						self.headerFixedHig = $(".navbar").outerHeight();
						self.initialize();
					}, 200);
				}				
			},10);

			

// Page buttons ==================================================================
			
			
			// Page scrollUp button
			self.pgScrUp =  $(".move_up, .goTop");
			
			$(".pgScrollUp, .move_up, .goTop").click(function(){
				self.scroll_update(0);
				self.htmlScroll.animate({ scrollTop: "0px" }, 500, "easeInOutQuart" );

			});
			
			// Cache the Window object
			self.scrollObj = $("body, html");
			self.pgAll = $(".bodyContainer").length>0 ? $(".bodyContainer") : $();
			self.$html = $("html");
			self.$window = $("body");	


			$(".contactPage .contactPage_content").css({ "min-height": $(window).height() - self.ContPgTopSpace, "margin-top": self.ContPgTopSpace } );
			
			self.htmlScroll = isNaN($("body").scrollTop()) ? $("html") : $("body");
			
			
			if(isTouch){
				$("body").find('.mainContent .addVideo.backGroundVideo').each(function(){
					$(this).data("inMain",true);					
				});
			}
			
			// Footer Open - close button
			if(isTouch){			
				$(".nav a, .footer_close, .btn-navbar").click(function(){					
					$("body").find('.addVideo.backGroundVideo, .video_content.fullscreenVideo').each(function(){
						var vid2 = $(this);
						vid2.data("added", false);	
						vid2.data("isPlaying", false);	
						vid2.find('.vid').each(function(){
							$(this).removeClass("enablHardwareAcc")
							$(this).remove();
						});
						vid2.find('img').show();
						vid2.find('.video_hover').show();
						vid2.find('.video_hover').css({"z-index":"15"});
					});				
					self.videoRest();					
				});
			}
			
			if(!isTouch){
				$(".tutorial").click(function(){
					$(this).fadeOut(200, function(){
							$(this).remove();
						})			
				});			
			}
	}	
	
	
	mainFm.prototype = {

		// Initialize the require objects and variables 
		initialize : function(){
			
			var self = this;
			
			
			self.prePg = "";
			self.curPg = "";
			self.menuList = [];
			
			// Loading object added
			self.bdy.prepend('<div id="preloadImg" style="width:150px; height:150px; visibility:hidden; position:absolute; left:0; top:0; overflow:hidden"> </div>');
			self.dumDiv.addClass('email_loading');
			self.dumDiv.removeClass('email_loading');
			
			self.phHigSet = lowResDesktop ?  self.StgHig : self.stageWidth < 1220 ? self.StgHig-160 : self.StgHig-190;

			$(".isotope_option").show();				

			$("body").find('.masonry_items').each(function(){
				$(this).find(".item").css({"position":"relative"});
				$(this).find(".item").addClass("enablHardwareAcc");				
			});				
			
			if($('.slideshow_tweet').length>0){
				$('.slideshow_tweet').cycle({
					fx: 'scrollUp', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
					speed:    1000, 
					easing: 'easeInOutBack',
					containerResize: 1,
					timeout:  5000 
				});
			}

			
// Initialize the menu navigation action
			var kk = -1;
			var qq = -1;
			self.rez = false;
			
			if( parseInt($.browser.version, 10) === 7 && $.browser.msie){
				$(".header").css({"background":"","filter":"none"});
				self.dumDiv.addClass("mobile_menuBg_ie");
				$(".header").css({"background-color": self.dumDiv.css("background-color")});
			}
			
			if( parseInt($.browser.version, 10) <= 8 && $.browser.msie){
				$(".img-shadow").css({"opacity" : 0});
			}
			
			try {
				document.createEvent('TouchEvent');
				$(".lightStyle, .darkStyle, .contentWrapper").on('click', function() {
				});
			} catch (e) {
				// nothing to do			
			}			
			
			
			$(".header .nav li, .menu_link").each(function() {
				var slf = $(this).children();
				qq++;
				if(slf.attr("href") === "" || slf.attr("href") === undefined){
					return;
				}
				slf.on('click', function() {				
					$(".nav li a").removeClass("active");
					$(this).addClass("active");
						
					var gg =  String($(this).attr("href")).split("#");
					if(gg[1] === self.url){
						self.page_position();
					}
				});								
			});
			
			
			$("body").find(".move_down, .move_down_white").each(function(){
				$(this).on('click', function() {
					var gg =  $(this).attr("href").split("#");
					if(gg[1] === self.url){
						self.page_position();
					}
				});
			});					
			

			self.homePg = self.homePage === "" ? self.menuList[0].substr(1, self.menuList[0].length): self.homePage;
			self.cM = $('.contentWrapper [data-id="'+"#"+self.menuList[0]+'"]').parent();

			$('.contentWrapper [data-id="'+"#"+self.homePg+'"]').css("visibility","visible");			
			$('.contentWrapper [data-id="'+"#"+self.homePg+'"]').hide();			
			
			// Initialize the mobile button action
			self.navUl.data('view',false);
			
			self.navEvent = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
			
			self.bdy.find('img').each(function() {
				$(this).data("src",$(this).attr('src'));
			});			
			
			// Initialize the video	
			self.intVideoObject(self.bdy);
			
			self.parallaxBgUpdate();
			
			
			// Initialize the window resize function
			clearInterval(self.intr);
			$(window).resize(function() {	
				clearInterval(self.intr);
				self.intr = setInterval(function(){clearInterval(self.intr); self.windowRez();},100);
			});
			
			//Initialize the mobile orientationchange function
			$(window).on( 'orientationchange', function(){
				self.windowRez();
			});
			
			self.site_display();			
			self.moveItem =  $(".mainContent").length > 0 ? $(".mainContent") : undefined;
			
			if(!isTouch){
				self.page_drag();
			}
			
			var chkInt = setInterval(function() {
				clearInterval(chkInt);
				
				self.vertical_scroll();
				
				self.history();
				self.page_setup();
					
			}, 300);
			
			
			setTimeout(function(){ 
			
				  if( ((self.url === "!home" || self.url === "undefined") && window.innerWidth > 979)){						
					  	self.animation_LoadingFinish();						
				  }else{	
				  				 
					  	self.homeTypeText.css({"visibility":"visibile"});
					  	$(".headerMainHolder").removeClass("moveToHide");
					  	$(".home_footer").removeClass("moveToHide");
						$(".rocket_holder").addClass("rocketStartfly");			
					 	self.homeTypeAnimateFinish = true;
					  	self.headerFad.animate({"opacity":"0"},1000,"easeOutQuart", function(){
						  self.headerFad.remove();
					  	});					  
				  }										
			}, 500);
			
			// display isotope item
			$('.isotope_items').show();
			
			$(".homeBack").hide();
			
			try{  $api.playToggle(); } catch (e) { }
			
			$(document.documentElement).keyup(function (event) {
			//	if("!home" !== self.url){
				// Left Arrow or Down Arrow
				if ((event.keyCode == 37) || (event.keyCode == 40)) {
						nexPreAction($(".previousPage span"));
					// Right Arrow or Up Arrow
					} else if ((event.keyCode == 39) || (event.keyCode == 38)) {
						nexPreAction($(".nextPage span"));
					}
			//	}
			});
			
			$(".previousPage span, .nextPage span").on('click', function() {
				nexPreAction($(this));
			});
			
			function nexPreAction (mc){
				
				if(mc.data("url")){
					if(mc.data("url") !== self.url){
						window.location.href = "#"+mc.data("url");
						}else{
							self.page_position();
					}
					if($('.nav a[href$="#'+mc.data("url")+'"]').length > 0){
						$(".nav li a").removeClass("active");
						$('.nav a[href$="#'+mc.data("url")+'"]').addClass("active");
					}
				}
				
			}

			$(".fadeAfterLoad").delay(200).fadeIn(300);
		},
		
		
		
		// Site Preload image  function
		intImgLoad : function  (img){
		
			var self = this;
			
				img.attr('src', img.attr("data-src"));
                 img.on("load",function(){			
			
					if(self.imgFinished < self.preloadImages.length-1){
						self.imgFinished = self.imgFinished+1;
						$(".site_loading_bar").css({"width":Math.round(self.imgFinished/(self.preloadImages.length)*100)+"%"});
						self.intImgLoad(self.preloadImages[self.imgFinished]);					  
					}else{
						if(self.imgFinished === self.preloadImages.length-1){
							self.imgFinished = self.imgFinished+1;
							siteStartOpen = true;
						}
					}
					
                  }).error(function () {
					  if(self.imgFinished < self.preloadImages.length-1){
						self.imgFinished = self.imgFinished+1;
						$(".site_loading_bar").css({"width":Math.round(self.imgFinished/(self.preloadImages.length)*100)+"%"});
						self.intImgLoad(self.preloadImages[self.imgFinished]);

					  }else{
						siteStartOpen = true;
					  }                  
				  }).each(function() {
                    if(this.complete) { $(this).trigger('load'); }
                  });                  
          },
		
		
		
		animation_LoadingFinish : function(){
			var self = this;
			$(".site_loading_bar").css({"width":"100%"});	
			self.headerFad.css({"background-color":"transparent"});
			self.homeTypeText.css({"visibility":"hidden"});			
			
			
			setTimeout(function(){
				self.loadBarTop.css({"height": 0 });
			}, 1000);
			
			if(!isTouch){
				setTimeout(function(){
					$(".home_footer").removeClass("moveToHide");
				}, 1500);
				
			}else{
				$(".headerMainHolder").removeClass("moveToHide");
				$(".home_footer").removeClass("moveToHide");
			}
			
			setTimeout(function(){
					$(".rocket_holder").addClass("rocketStartfly");
			}, 2000);
			
			setTimeout(function(){	
				self.homeTypeAnimateFinish = true;
				self.headerFad.remove();
				self.typingEffect(self.homeTypeText); 
			}, 1500);
					
			 siteStartOpen = true;
		},
		
		// Type writting Effect
		
		typingEffect : function(mc){
			var self = this;
			mc.css({"visibility":"hidden"});
			var mcLetter = mc.text();
			var splitLetter = mcLetter.split("");
			var addTypeEffect = mc.hasClass("removeTypeEffect") ? false : true;
			var numLetter = 1;
			var typeIntV;
			var intr1 = self.homeTypeText.length>0 && addTypeEffect? 500 : 3200;
			self.intervalTime = self.homeTypeText.length>0 ? 1500 : 100;
			self.aniTyping = false;
			
			mc.css({"visibility":"visibile"});
			$(".typing_cursor").css({"visibility":"visible"});
			
			if(addTypeEffect){
				mc.text("_");
				mc.css({"visibility":"hidden"});
				clearInterval(typeIntV);
				setTimeout( function(){					
					mc.text(splitLetter[0]);
					mc.css({"visibility":"visible"}); 
				}, self.intervalTime );
			}
			
			
			typeIntV = setInterval(function() {
				if(!self.aniTyping){
					self.aniTyping = true;
					if(addTypeEffect){
						setTimeout(function(){						
							mc.text(mc.text()+splitLetter[numLetter]);
							numLetter = numLetter+1;
							self.intervalTime =  splitLetter[numLetter] === " " ? 500 : 20;
							self.aniTyping = false;
						}, self.intervalTime );
					}else{
						numLetter = splitLetter.length;
						self.openHomePage();		
					}
				}				
				
				if(numLetter > splitLetter.length-2){
					
					setTimeout(function(){
						self.openHomePage();											
					}, intr1);
					
				  	clearInterval(typeIntV);
				}				
				
			}, 50);

		},
		
		openHomePage : function(){
			var self = this;
			$(".typing_cursor").remove();
			$(".headerMainHolder").removeClass("moveToHide");
			self.curP.find('[data-animated-in]').each(function(){
				if(lowResDesktop){
					self.animateObject($(this), 1000000);
				}else{
					self.animateObject($(this), 0);
				}
			});	
		},
		
		
		// Page vertical scroll action
		vertical_scroll : function(){
			var self = this;
			self.scrspy_curPg = self.url;
			self.sliderTimm;
			
			self.swapMenuColor = $(".header").hasClass("swapMenuColor");

			var scrpyMc = []
			for(var ab=0; ab < self.conArry.length; ab++){
				scrpyMc.push(self.conArry[ab]);
			};
			
			self.curPageShow = scrpyMc[0];
			
			self.chkScrDown = 0;
			
			var scrIntSpd = isTouch ? 700 : 70;
			var interVal4;
			var interVal5;
			self.chkHideMc = undefined;			
			
			$(window).trigger("scroll");
			
			// Window scroll event
			$(window).scroll(function() {

													
				clearInterval(self.scrIntr);
				self.scrIntr = setInterval(function(){
					clearInterval(self.scrIntr);
					self.scrollPos = scrollPos = self.$html.scrollTop() > 0 ?  self.$html.scrollTop() :  self.$window.scrollTop();
					
					clearInterval(interVal5);
					clearInterval(interVal4);
					
					self.enableAutoposition = self.chkScrDown < self.scrollPos ? true : false;
					self.chkScrDown = self.scrollPos;
					
					
					if(self.scrollPos > 240){
						self.pgUp.show();					
					}else{
						self.pgUp.hide();
					}
					
					try{  
						var scrpyPos = [];
						for(var ab=0; ab < self.conArry.length; ab++){
							scrpyPos.push(self.conArry[ab].position().top);
						};
						
						var ii = scrpyMc.length-1;
						var isY = false;
						self.sUrl = "!home";
						self.curScrlPgMc = scrpyMc[0];
						var scrPP = 0;
						/* Page triggering code */
						if(self.enableAutoposition){
							scrPP = self.scrollPos+self.headHig+(self.winHeight/2);
						}else{
							scrPP = self.scrollPos+self.headHig+100;
						}
						$("body").find('.contentWrapper').each(function(i){									
							if($(this).position().top > scrPP && !isY ){
								isY = true;
								self.sUrl = scrpyMc[i-1].attr("data-id");
								self.curScrlPgMc = scrpyMc[i-1];	
								ii = i-1;		
							}
						});
						
						if(!isY){
							self.sUrl = scrpyMc[scrpyMc.length-1].attr("data-id");
							self.curScrlPgMc = scrpyMc[scrpyMc.length-1];
						}
						
						if(self.chkHideMc !== self.curScrlPgMc.attr("data-id")){							
							if(self.enableLowPerformance){
								self.update_menu(self.curScrlPgMc);
							}							
						}
					  
						if(self.chkHideMc !== self.curScrlPgMc.attr("data-id")){	
							self.chkHideMc = self.curScrlPgMc.attr("data-id");							
							if(self.HideUnuse){									
								for(var bb=0; bb < self.conArry.length; bb++){							  
									if(ii+1 !== bb && ii-1 !== bb && ii !== bb || (ii+1 === self.conArry.length+1)){
										if(self.conArry[bb].css("visibility") !== "hidden"){
											self.conArry[bb].css({"visibility":"hidden"});
										}
									}else{
										 if(self.conArry[bb].css("visibility") !== "visible"){							
											self.conArry[bb].css({"visibility":"visible"});
										}
									}
								}
							}
														
							if(!supersizedOnBody){
								if(self.chkHideMc !== "!home"){		
									$("#supersized li").css({"visibility":"hidden", "display":"none"});
									$("#supersized li").css({"visibility":"hidden", "display":"none"});
									$("#supersized li.activeslide").css({"visibility":"visible", "display":"block"});
									if(!$.supersized.vars.is_paused){  api.playToggle(); }																
								}else{
									$("#supersized li").css({"visibility":"visible", "display":"block"});
									if($.supersized.vars.is_paused){ api.playToggle(); }	
								}
							}
							
							try{
								if(self.homeFlexSlider.length > 0){									 
									if(self.homeFlexSlider.data("slid") !== undefined){
										if(self.chkHideMc !== "!home"){	
											self.homeFlexSlider.data("slid").pause();
										}else{
											self.homeFlexSlider.data("slid").resume();
										}
									}
								}
							} catch (e) { }
							
							if(self.scrspy_curPg !== self.sUrl){ 
								if(self.hSliderVid.length > 0){	
									self.curP = self.curScrlPgMc;
									if(self.chkHideMc !== "!home"){	
										self.video_delete(self.hSliderVid);						
									}else{ 
										self.videoRest($(".homeSlider"));
										
									}
								}
							}
					  }

					  if(self.scrspy_curPg !== self.sUrl){								
						  self.scrspy_curPg = self.sUrl;						
						  if(!self.enableLowPerformance && self.azh !== undefined){
							  self.updatePage(self.curScrlPgMc);
							  if(self.scrollPos < 250){
								  if(self.onePage && !isMobileChk){		
									  window.location.href = "#"+self.homePage;
								  }
							  }	
						  }	
						  self.azh = self.scrspy_curPg;
					  }					  
					
						if(!self.disableAnimation){
						  self.curScrlPgMc.find('[data-animated-in]').each(function(){							
							  self.animateObject($(this), self.scrollPos);
						  });
						}
						
					}	catch (e) { }

				}, 70);	
				
						
			});			
			
		},
		
		
		
		
		// Fullscreen gallery video load function
		fullScreenGallery : function(obj){
			var self = this;
			try{
				$(obj).find('.addVideo').each(function(){
					var vid_ = $(this);
					vid_.data("added", false);
					vid_.find('.vid').each(function(){
						$(this).removeClass("enablHardwareAcc")
						$(this).remove();
					});
					vid_.find('img').show();
					vid_.find('.video_hover').show();
					vid_.find('.video_hover').css({"z-index":"5"});
				});
			} catch (e) { }
		},
		

/* Resize Image */
		
		resizeImg : function (obj){
						
			var self = this;
			
          	if(obj.width() === 0){ return; }
			var hold;

			if(obj.parent().parent().parent().parent().hasClass("projImgs") || obj.hasClass("resize_align")){				
				if(obj.hasClass("resize_align")){
					hold =obj.parent();
				}else{
					hold =obj.parent().parent().parent().parent();
				}
			}else{
				return;
			}

			obj.css({"width":"auto", "height":"auto"});

			if(obj.data("width_") === undefined){
				var image = new Image();				
				image.onload = function() {
				  appy_resizeImg(obj, this.width, this.height);
					obj.data("width_", this.width);
					obj.data("height_", this.height);
					try {	this.remove();	} catch (e) { }
					self.scroll_update();				
					};				
				image.src = obj.attr("src");
			}else{
				appy_resizeImg(obj,obj.data("width_"), obj.data("height_"));	
				self.scroll_update();		
			}
			
			function appy_resizeImg(obj,wid, hig){				
				var	iw = wid,
					ih = hig,
					ww = hold.width(),
					wh = hold.height(),
					rw = wh / ww,
					ri = ih / iw,
					tp = 0,
					lp = 0,
					newWidth, newHeight,
					newLeft, newTop,
					properties;
					
					if(obj.hasClass("resize_align") && !obj.hasClass("fitInside") ){
						obj.css({ "margin-left": "0px" });
						var rezr = hold.width() < hold.height() ? rw < ri : rw > ri;
						newWidth = ww;
						newHeight = ww * ri;
						if ( rezr ) {
							lp = ( ww  -newWidth)/2;				
						} 
						obj.css({'margin-left': Math.round(lp) + "px"});
					}else{
						if (ww > wh) {	
							newWidth = ww;
							newHeight = ww * ri;
							if(ww < newWidth || wh < newHeight ){
								newWidth = wh / ri;
								newHeight = wh;
							}
						} else {							
							newWidth = ww;
							newHeight = ww * ri;
						}
						lp = ( ww  -newWidth)/2;
						obj.css({'margin-left': Math.round(lp) + "px"});
					}
					
					tp = (wh-newHeight)/2;	
			  
			  		properties = {
							'width': Math.round(newWidth) + 'px',
							'height': Math.round(newHeight) + 'px',
							'margin-top': Math.round(tp) + "px",
							"left":"auto",
							"right":"auto",
							'bottom': "auto"		
						};
						
					obj.css( properties);
				}
		},


// Site start display function
		
		site_display : function(){			
			var self = this;			

			/* Portfolio masonry plugin initilize */
			$("body").find(".masonry_items").each(function(){
				var $container = $(this).isotope({ 
					masonry: {
					  columnWidth: '.grid-sizer',
					  gutter: '.gutter-sizer'
					},
					itemSelector : '.item',
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false,
					}					
				});					
				 $(this).data("masonryElement", $container);
			});
				
			$('#options .option-set a.selectOnLoad').trigger("click");
			
			$("body").data("bgType",isMobileChk);

			/*	.parallax(xPosition, speedFactor, outerHeight) options:
				xPosition - Horizontal position of the element
				inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
				outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
			*/
			
			if(!isTouch){
				$('.addParallaxEffect').each(function(){
					$(this).parallax("50%", 0.6);
				});
			}
			
			// Twitter flex slideshow initialize
			$('body').find('.flexslider').each(function(){
				if(!$(this).hasClass("flexSlideshow_twitter")){
					try{
						var aniTyp = $(this).hasClass('slideAnimation') ? "slide" : "fade";
						var laz = $(this).hasClass('flexslider');
						if(!laz){  $(this).addClass("flexslider"); }				
						var ffx = $(this);
						ffx.append('<div class="slider_loading" ></div>');
						$(this).find(" a.lazyload").each(function(){
							self.lazyLoadInt($(this));
						});				
		
						var flexs = $(this);
						flexs.flexslider({
						slideshow: true,
						animation: aniTyp,
						slideshowSpeed: 5000,
						start: function(slider){
							flexs.data("slid",slider);
							flexs.find(".slider_loading").remove();
							slider.pause();
							}
						});
					} catch (e) { }
				}
			});

			$("body").find('.contentWrapper').each(function(){
				if($(this).attr("data-id") === self.url){
					isInCont = $(this);
				}
			});			
			
		},
		
		
		animateEngine : function(_obj, _xpo, _ypo, _alp){			
			var self = this;
			if(!self.softDrag && self.firDrag){
				if(!isNaN(_xpo)){
					clearInterval(self.posDrg);
					var _sp = _obj.position().left;				
					self.posDrg = setInterval( function(){													
						_sp += (_xpo-_sp)/5;
						try { _sp = Number(_sp.toFixed(0)); }catch(e){}
						if(_xpo > _sp-5 && _xpo < _sp+5){
							clearInterval(self.posDrg);	
							_sp = _xpo;
						}
						if(Modernizr.csstransforms){
							_obj.css({ "x" : _sp+"px" });
						}else{
							_obj.css({ "left" : _sp+"px" });
						}
					}, 10);
				}	
			}else{	
				_obj.css({ "x" : _xpo+"px" });
			}
			
		},
		
		

// Page Drag code start here
		
		page_drag : function(){
			
			var self = this;
			self.pageCurPos = 0;
			
			// slide Drag Coding
		
			var tm;
			var tmArr=[];
			var tmMovChk;
			var tmRevMov = false;
			var bgDrgPos = 0;
			var strDrg = false;
			self.drgPosDir = 0;
			self.finishPlay = true;
			
			var mainCon = self.selEle;
			self.moveItem =  $(".mainContent");
			self.dragIt = false;
			self.mouse_drag = true;
			self.applyDragAction = true;
			
			
			$(".disable_mouse_drag").on('mousedown', function(e) {
				self.applyDragAction = false;
			});
			
			$(".disable_mouse_drag").on('mouseup', function(e) {
				self.applyDragAction = true;
			});
			
			/* Add Mouse cursor */
			if(self.mouse_drag){
				if(!this.hasTouch) {
					
					self.moveItem.on('mousedown', function() {	
						if(self.applyDragAction && !lowResDesktop){	
							tmRevMov = false;
							mouseDragInit();
						}
					});
				}
				
				// Start to drag using below functionv
				var dragStart = function(){
					if(tch !== tch_){
						strDrg = true;
						self.dragIt = true;
						self.moveItem.addClass("fm_draging-cursor");						
					}
					self.moveItem.stop();

					var tm__ = Math.round(Math.abs(Number(tch_)-Number(tch)))< 101? 
					Math.round( Math.abs(Number(tch_)-Number(tch))) : Math.round(100 + Math.abs(100-(Math.abs(Number(tch_)-Number(tch))))*0.2);					
					
					if(Math.round(Number(tch_)-Number(tch)) > 0){
						tm = tm__ + self.pageCurPos;
					}else{
						tm = tm__ - self.pageCurPos;
					}
					
					if(self.finishPlay){
						if((Number(tch_) > Number(tch))){
							if(Modernizr.csstransforms){
								self.moveItem.css({"x":Number(tm)+"px"});
							}else{
								self.moveItem.css({"left":Number(tm)+"px"});
							}
						}else{
							if(Modernizr.csstransforms){
								self.moveItem.css({"x":-Number(tm)+"px"});
							}else{
								self.moveItem.css({"left":-Number(tm)+"px"});
							}
						}
					}
				};
				
				// Stop drag using below function, The next and previous slide will start here
				var dragStop = function(){
					 
					if(Number(tch) !== Number(tch_) && self.finishPlay){
						if(Number(tch) > Number(tch_) ){		
							if(((Number(tch) - Number(tch_)) > 50 || tmMovChk>5) && !tmRevMov){
								self.moveItem.stop();								
								self.drgPosDir = 1;
								dragFinish();								
							}else{
								self.moveItem.stop();								
								self.animateEngine(self.moveItem, self.pageCurPos, false, false );							
								}							
						}else{							
							if(((Number(tch_)-Number(tch)) > 50 || tmMovChk>5) && !tmRevMov){
								self.moveItem.stop();								
								self.drgPosDir = -1;
								dragFinish();
							}else{
								self.moveItem.stop();								
								self.animateEngine(self.moveItem, self.pageCurPos, false, false );
								}
						}
					}
					tm = 0;
					
					self.moveItem.removeClass("fm_draging-cursor");					
				};
				
				// Mousedown event for drag
				
				var mouseDragInit = function(){	
		
					$(document).on('mousedown.fmDragEvent', function(e) {
						tch = tch_ = Math.abs(e.clientX);
						tmArr = [];
						tmArr.push(tch);
						
						bgDrgPos = parseInt(self.moveItem.position().left, 10);
						
						
						$(document).on('mousemove.fmDragEvent', function(e) {
							tmRevMov = tch_ > Math.abs(e.clientX) ? (Number(tch) > Number(tch_)) ? false:true : (Number(tch) < Number(tch_)) ? false : true;
							tch_ = Math.abs(e.clientX);
							tmArr.push(tch_);
							tmMovChk = Math.abs((tmArr[tmArr.length-1]-tmArr[tmArr.length-2]));
							dragStart();
							return false;
						});
						
						return false;
					});
					
					$(document).on('mouseup.fmDragEvent', function() {
						strDrg = tch !== tch_ ? false : true;
						$(document).off('mousedown.fmDragEvent');
						$(document).off('mouseleave.fmDragEvent');
						$(document).off('mousemove.fmDragEvent');
						$(document).off('mouseup.fmDragEvent');
		
						dragStop();
						return false;
					});
					
					
					$(document).on('mouseleave.fmDragEvent', function() {
						strDrg = false;
						$(document).off('mousedown.fmDragEvent');
						$(document).off('mouseleave.fmDragEvent');
						$(document).off('mousemove.fmDragEvent');
						$(document).off('mouseup.fmDragEvent');	
						return false;
					});
				};
		
				
				// Touch screen Enable
				
				var touEle = self.moveItem;
				var tch = 0;
				var tch_ = 0;
				var tchY = 0;
				var tchY_ = 0;
				
				self.touMoving = true;
				
				try {
					document.createEvent('TouchEvent');
					
					$(touEle).each(function() {
						this.ontouchstart = function(e) {
								self.touMoving = true;
								touchStart(e);
								return true;
							};
						this.ontouchend = function(e) {
							self.touMoving = true;
							touchEnd();
							return true;
						};	
						
						this.ontouchmove = function(e) {
							if(self.touMoving){
								touchMove(e);
							}
							if(!isMobile){
								return true;
							}
						};
						
						this.find('.nonDraggable').on("mousedown", function(e) {				
							e.stopImmediatePropagation();
						});	
					});
					
					
					
				} catch (e) {
					// Nothing to do
				}
						
							
				var touchStart = function(e) {
					tch = tch_ = Math.abs(e.clientX);
					tmArr = [];
					tmArr.push(tch);
					self.moveItem.stop();
					
					bgDrgPos = parseInt(self.moveItem.position().left, 10);
					tch = tch_ =  e.targetTouches[0].clientX;
					
					tchY = tchY_ = e.targetTouches[0].clientY;
				};
					 
				var touchEnd = function() {
					dragStop();
					if(Math.abs(tchY - tchY_) > 100){
						self.moveItem.stop();
					}
				};
		
				var touchMove = function(e) {
					tchY_ = e.targetTouches[0].clientY;
					if(Math.abs(tchY - tchY_) < 100){
						tmRevMov = tch_ > Math.abs(e.targetTouches[0].clientX) ? (Number(tch) > Number(tch_)) ? false:true : (Number(tch) < Number(tch_)) ? false : true;
						tch_ = Math.abs(e.targetTouches[0].clientX);
						tmArr.push(tch_);
						tmMovChk = Math.abs((tmArr[tmArr.length-1]-tmArr[tmArr.length-2]));
						dragStart();
					}else{
						self.touMoving = false;
						return false;
					}
				};
				
				var dragFinish = function(){
					if(Math.abs(tchY - tchY_) < 100){
						self.moveItem.stop();						
							var pre, nex,preP, nexP;
							for(var ik=0; ik < self.navArry.length; ik++){
								if(self.navArry[ik].attr("data-id") === self.url){
									if(self.navArry[ik-1]){
										pre = self.navArry[ik-1].attr("data-id");
										preP = self.navArry[ik-1];
									}
									if(self.navArry[ik+1]){
										nex = self.navArry[ik+1].attr("data-id");
										nexP = self.navArry[ik+1];
									}
								}
							}
							
			
							self.spd = 0;							
							if(self.drgPosDir<0){
								
								self.pageCurPos = -self.pageCurPos >= self.winWidth ? self.pageCurPos+self.winWidth: 0;	
								
								if(!lowResDesktop){						
									for(var ik=0; ik < self.navArry.length; ik++){									
										if(((self.pageCurPos+50)*-1) < (self.navArry[ik].position().left+50) && ((self.pageCurPos-50)*-1) > (self.navArry[ik].position().left-50)){
											pre = self.navArry[ik].attr("data-id");
											preP = self.navArry[ik];
											if(self.navArry[ik+1]){
												nex = self.navArry[ik+1].attr("data-id");
												nexP = self.navArry[ik+1];
											}
										}								
									}
								}
															
								try{  preP.scrollTop(0); } catch (e) { }
								
								self.animateEngine(self.moveItem, self.pageCurPos, false, false );
								setTimeout( function(){					
									if(pre){	window.location.href = "#"+pre;	}
								},100);
								
							}else{	
							
								self.pageCurPos = -self.pageCurPos <= ($(".mainContent").width()-(self.winWidth*2)) ? self.pageCurPos-self.winWidth : - ($(".mainContent").width()-(self.winWidth+51-self.numCon));
							
								if(!lowResDesktop){
									for(var ik=0; ik < self.navArry.length; ik++){									
										if( ((self.pageCurPos-50)*-1) > (self.navArry[ik].position().left-50) && ((self.pageCurPos+50)*-1) < (self.navArry[ik].position().left+50)){
											nex = self.navArry[ik].attr("data-id");
											nexP = self.navArry[ik];										
											if(self.navArry[ik-1]){ 
												pre = self.navArry[ik-1].attr("data-id");
												preP = self.navArry[ik-1];
											}
										}								
									}
								}
													
								try{ nexp.scrollTop(0);	} catch (e) { }	
								
								if(nex == undefined){ self.pageCurPos = 0;  }
								
								self.animateEngine(self.moveItem, self.pageCurPos, false, false );
								setTimeout( function(){					
									if(nex){ window.location.href = "#"+nex;
									}					 
								},100);	
							}
							
					}
				};
				
				// Page Drag code end
				
			}
		},

		
		// Set page dimension
		page_dimension : function(){
			var self = this;
			var conPos = 0;
			self.numCon = 0;
			
			$(".mainContent").children().each(function(){
				self.numCon++;
			});	
			
		
			
			$(".home_fullHeight").css({"min-height":self.StgHig});

			if(!lowResDesktop){	
				$(".mainContent_holder").css({"height":"auto", "overflow":"auto"});
				$(".mainContent_holder").css({"top": 0});		
				$(".homeTextloadInDesktop").append($('.centerPosition'));				
								
			}else{
				$(".mainContent_holder").css({"top":"0px"});
				$(".mainContent_holder").css({"height":"0", "overflow":"hidden"});				
				$(".homeTextloadInMobile").append($('.centerPosition'));
			}
			
			self.phHigSet = lowResDesktop ?  self.StgHig : self.stageWidth < 1220 ? self.StgHig-120 : self.StgHig-180;
			
			
			$("body").find(".contentWrapper").each(function(){		
				  if(self.onePage){		
					  if(!lowResDesktop){
						  $(this).css({"width": self.winWidth, "height": self.phHigSet-self.menuTopSpace});					
					  }else{
						  if(isTouch){
							  $(this).css({"width": self.winWidth, "min-height":self.phHigSet-self.menuTopSpace, "height": "auto" });						
						  }else{
							  $(this).css({"width": self.winWidth, "height": "auto" });
						  }
					  }				  
				  }else{
					  $(this).css({"width": self.winWidth, "height": "auto" });
				  }
			});	
			
			$(".mainContent_holder").css({"width":(self.winWidth)+"px", "min-height":self.StgHig});
			$(".mainContent").css({"width":(self.numCon*self.winWidth)+50+"px"});
			
			if(!lowResDesktop){
				$(".mainContent_holder").css({"height": self.phHigSet+self.menuTopSpace,"overflow":"hidden"});
				$(".mainContent").css({"height": self.phHigSet,"overflow-y":"hidden"});
			}else{
				
				if("!home" == self.url){
					$(".mainContent_holder").css({"height":"0", "min-height":"none", "overflow":"hidden"});
				}else{
					$(".mainContent_holder").css({"height": "auto", "overflow-y":"auto"});
				}				
				$(".mainContent").css({"height": "auto", "overflow-y":"auto"});
				
			}
			
			$("body").find(".contentWrapper.fullHeight").css({"height": self.StgHig});

			 
			 $(".homePageContent").css({"width": self.winWidth});
			 if(!lowResDesktop){
				$(".homePageContent").css({"height": self.StgHig});
			 }else{
				 $(".homePageContent").css({"height": "auto"});
			 }
			
		},
		
		
		
		// Scrollbar update function
		scroll_update : function(rPos){	
			var self = this;
			var rePos = typeof rPos !== undefined ? rPos : 0;	
			
			if( $(".homePageContent").hasClass("m-Scrollbar") && $(".homePageContent").data("scrollbarAdded") ){
				try{ 	
					$(".homePageContent").mCustomScrollbar("update");
					$(".homePageContent").mCustomScrollbar("scrollTo","top");
				} catch (e) { }
			}
			
			try{ 	
				if(self.curP.hasClass("m-Scrollbar") && self.curP.data("scrollbarAdded") ){
					self.curP.mCustomScrollbar("update");
					self.curP.mCustomScrollbar("scrollTo","top");		
				}				
				self.curP.find(".m-Scrollbar").each(function(){
					if($(this).data("scrollbarAdded")){									 
						$(this).mCustomScrollbar("update");
						$(this).mCustomScrollbar("scrollTo","top");
					}					
				});
			} catch (e) { }
			
			
			
			$('body').find(".m-Scrollbar").each(function(){
				if($(this).data("scrollbarAdded")){
					$(this).mCustomScrollbar("update");
					$(this).mCustomScrollbar("scrollTo","top");	
				}else{
					$(this).scrollTop(0);	
				}							
			});
			
			try{
				if(!isTouch){
					if(rePos !== 0 && rePos !== undefined && self.curP.data("scrollbarAdded") ){
						self.curP.mCustomScrollbar("update");
						self.curP.mCustomScrollbar("scrollTo", rePos);
					}
				}
			} catch (e) { }
			
			if(!isTouch){ 
				$("html").getNiceScroll().resize(); 
			}else{
				self.curP.append('<hr class="scrBugFix space_max">');
				setTimeout(function(){	self.curP.find('.scrBugFix').remove(); },500);
			}	
			
			
		},
		
		
		// Update the page, when the page change is or resize 
		updatePage : function(ele){			
			var self = this;			
			
			if(self.rez){ return; }
			
			var menuDefined = false;
			
			if($('.nav a[href$="#'+ ele.attr("data-id")+'"]').length > 0){
				menuDefined = true;
				$(".nav li a").removeClass("active");
				$('.nav a[href$="#'+ele.attr("data-id")+'"]').addClass("active");				
				if($('.nav a[href$="#'+ele.attr("data-id")+'"]').parent().parent().parent().hasClass("dropdown")){
					$('.nav a[href$="#'+ele.attr("data-id")+'"]').parent().parent().parent().find(".dropdown-toggle").addClass("active")
				}
			}
			
			if(!menuDefined){ $(".nav li a").removeClass("active"); }
			
			if(self.homeMenuAdded){ 
				$(".homeMenu a").removeClass("active"); 
				$('.homeMenu a[href$="#'+ele.attr("data-id")+'"]').addClass("active");
			}
			
			if(!menuDefined){
				if($('.nav a[href$="#'+ele.attr("data-continue-page")+'"]').length > 0){
					$(".nav li a").removeClass("active");
					$('.nav a[href$="#'+ele.attr("data-continue-page")+'"]').addClass("active");
				}
			}
			
			ele.find('.masonry_items').each(function(){	
				$(this).data("masonryElement").isotope('layout');		
			});	
			
			for(var ik=0; ik < self.navArry.length; ik++){
				if(self.navArry[ik].attr("data-id") === ele.attr("data-id")){
					if(self.navArry[ik-1]){
						$(".previousPage span").data( "url" , self.navArry[ik-1].attr("data-id") );
					}
					if(self.navArry[ik+1]){
						$(".nextPage span").data( "url" , self.navArry[ik+1].attr("data-id") );
					}
				}
			}
			
			if(!isTouch){
				$("body").find('.graph_container li').each(function() {
					$(this).each(function() {
						$(this).children(':first-child').css("width","0px");
					});
				});
				
				ele.find('.graph_container').each(function(){
					self.graph_display($(this));
				});				
			}
			
			
			var self = this;			
			
			var isInCont = undefined;
			for(var ab=0; ab < self.conArry.length; ab++){
				if(self.conArry[ab].attr("data-id") === self.url){
					isInCont = self.conArry[ab];
					try{ 
						self.conArry[ab].find('.flexslider').each(function(){
							var fc = $(this);
							if(fc.data("loadInPop") === undefined && fc.data("slid") !== undefined && fc.data("autPly") ){												
								fc.data("slid").resume();
							}
						});
					} catch (e) { }					
				}else{					
					try{ 
						self.conArry[ab].find('.flexslider').each(function(){
							if($(this).data("slid") !== undefined){
								$(this).data("slid").pause();
							}
						}); 
					} catch (e) { }
				}
				
			};					
					
			if(!ele.hasClass("portfolioPage")){
				ele.find('.flexSlideshow').each(function(){
					try{
						if(!$(this).data("loaded")){
							$(this).data("loaded", true);
							var aniTyp = $(this).hasClass('slideAnimation') ? "slide" : "fade";
							var tim_ = $(this).attr('data-slidetime') ?  Math.abs($(this).attr('data-slidetime')) : 5000;
							
							$(this).find("a.lazyload").each(function(){
								self.lazyLoadInt($(this));
							});								
							if(aniTyp === "slide"){
								$(this).find("li").each(function(i){
									$(this).find(".loading_x").remove();
									$(this).find("img").show();
								});
							}
							var laz = $(this).hasClass('flexslider');
							if(!laz){  $(this).addClass("flexslider"); }				
							var ffx = $(this);
							ffx.removeClass('flexSlideshow');
							ffx.append('<div class="slider_loading" ></div>');
							var flexs = $(this);
							
							flexs.flexslider({
							slideshow: true,
							animation: aniTyp,
							slideshowSpeed: tim_,
							start: function(slider){
								flexs.data("slid",slider);
								flexs.find(".slider_loading").remove();
								slider.pause();
								}
							});	
						}
					} catch (e) { }				
				});	
			}
			
			
			ele.find('.flexslider').each(function(){
				try{  
					if($(this).data("slid") !== undefined){
						$(this).data("slid").windowRez(); 
					}
				} catch (e) { }	
			});

			
			if(lowResDesktop){
				ele.find('img.resize_align').each(function(){
					self.resizeImg($(this));
				});	
			}					
			
			// Text animation
			for(var s=0; s<self.txtAniTim.length; s++){
				clearInterval(self.txtAniTim[s]);
				self.ff = -1;
			}
							
			ele.find('.animate').each(function(){
				var sel = $(this);
				self.ff = self.ff+1;
				sel.data('i',self.ff);
				self.txtAniTim[self.ff] = setInterval(function(){
					clearInterval(self.txtAniTim[Number(sel.data('i'))]); 
					sel.animate({"top":"0px", "opacity":"1"},1000,"easeOutQuart");
				}, Number($(this).attr("data-time"))*200 );		
								
			});		
			
			
			
			setTimeout(function(){  
				$("#big-video-wrap").css({"display":"none"}); 
				if(BigVid !== undefined){
					BigVid.getPlayer().pause(); 	
				}
			},500);	
			
			
			
			if(ele !== undefined && !self.enableLowPerformance){			
				ele.find('.big_video').each(function(){ 
					var vmc = $(this);
					if(!self.lowMobile){
						if(vmc.attr("data-background-video") !== undefined){
							$("#big-video-vid").css({"display":"block"});
							vmc.append($("#big-video-wrap"));							
							var videoVolume = isNaN(vmc.attr("data-video-volume")) ? defaultVolume : Number(vmc.attr("data-video-volume"));
							if(bgVideopath !== vmc.attr("data-background-video"))	{
								bgVideopath = vmc.attr("data-background-video");	
								if(BigVid !== undefined){
									var vpp = bgVideopath.split(",");
									if(vpp < 2){
										BigVid.show(vpp[0] );
									}else{
										BigVid.show(vpp[0], {altSource:vpp[1]}  );
									}
								}												
							}else{
								setTimeout(function(){ 	
									if(BigVid !== undefined){
										$(".vidPlyPauBtn").data("view", true);	
										$(".vidPlyPauBtn").find("i").addClass("highlight");	
										BigVid.getPlayer().play(); 
									}
								},500);	
							}
							
							try{ 
								if(BigVid !== undefined){ 
									setTimeout(function(){ BigVid.getPlayer().play(); },500);
								} 
							} catch (e) { }
						}
					}else{
						setTimeout(function(){ 
							if(BigVid !== undefined){
								$(".vidPlyPauBtn").data("view", false);	
								$(".vidPlyPauBtn").find("i").removeClass("highlight");	
								BigVid.getPlayer().pause();	
							} 
						},500);
					}
				});	
				
				if(ele.find('.big_video').length > 0){
					setTimeout(function(){ $("#big-video-wrap").css({"display":"block"});	 },500);	
				}
			}
			
			self.scroll_update();
			
		},
		
		
		
		
			
		// Position the page
		page_position : function (e){	
			var self = this;

			
			if(!isTouch){				
				self.htmlBody.css({"overflow":"hidden"});
			}else{
				self.htmlBody.css({"overflow":"auto"});
			}
			
			for(var ik=0; ik < self.navArry.length; ik++){
				if(!lowResDesktop){					
					self.navArry[ik].css({"visibility":"visible"}).show();			
				}else{					
				 	if(self.navArry[ik].attr("data-id") === self.url){
					  self.navArry[ik].css({"visibility":"visible"}).show();	
				  	}else{
					  self.navArry[ik].css({"visibility":"hidden"}).hide();
				  	}
			 	}			 
			 }	
			
			self.curP = self.navArry[0];	
			
			 for(var ik=0; ik < self.navArry.length; ik++){
				if(self.navArry[ik].attr("data-id") === self.url){
					self.curP = self.navArry[ik];					
				}
			}

			var isInCont = undefined;
			$("body").find('.contentWrapper').each(function(){
				if($(this).attr("data-id") === self.url){
					isInCont = $(this);
				}
			});
				
			self.pgAll.stop();

			
			for(var s=0; s<self.txtAniTim.length; s++){
				clearInterval(self.txtAniTim[s]);
				self.ff = -1;
			}
			
			self.curP.find('.animate').each(function(){
				$(this).css({"top":"50px", "opacity":"0"});
			});			
			
			try{ self.curP.mCustomScrollbar("scrollTo","top"); } catch (e) { }	
			
			
			setTimeout(function(){
				if(self.scrollPos === undefined){
					self.scrollPos = scrollPos = self.$html.scrollTop() > 0 ?  self.$html.scrollTop() :  self.$window.scrollTop();
					self.scrollObj.stop().animate({ scrollTop: self.scrollPos-1});
				}
				
				if(!self.disableAnimation){
					if(isInCont !== undefined){
						var stVal = isInCont.hasClass("homePageContent") ? 1000010 : self.scrollPos;
						if(stVal !== 1000010 || self.homeTypeAnimateFinish){
							isInCont.find('[data-animated-in]').each(function(){
								if(lowResDesktop){
									self.animateObject($(this), 1000000);
								}else{
									self.animateObject($(this), stVal);
								}
							});
						}
					}
				}
			}, 200);	
			
			
			
			var posT = 0;
			var ddm = self.winWidth < 768 ? self.headerFixedHig-1  : self.headerFixedHig -1;

			posT = "!home" === self.url || lowResDesktop ? 0 :  self.stageWidth < 1220 ? self.winHeight-70 : self.winHeight-100;			
			
			if("!home" !== self.url){
				$(".mainContent_holder").removeClass("pageHide");
				$(".homeBack").stop().show().animate({"opacity":1}, 1000, "easeInOutQuart", function(){});				
			}else{
				$(".mainContent_holder").addClass("pageHide");				
				$(".homeBack").stop().animate({"opacity":0}, 1000, "easeInOutQuart", function(){
					$(this).hide();
					});
			}
			
			var scrollPos = self.pgAll.scrollTop();			
			var sped2 = posT > 0 && scrollPos > 0	? 0 : self.aniSpeed;						
			
			if(self.url !== self.curPgChk){			
				self.htmlBody.scrollTop(0);						
			}			
			
			self.pgAll.stop();
			self.moveItem.stop();
				
			if(isInCont !== undefined){
				if("!home" !== self.url){
					self.pageCurPos = -Math.round(isInCont.position().left);
				}									
			}
			
			if(lowResDesktop){	 self.pageCurPos = 0; }	
				
			if(!lowResDesktop){	
				self.pgAll.stop().animate({ scrollTop: posT }, sped2, "easeInOutQuart");
							
				self.animateEngine(self.moveItem, self.pageCurPos, false, false );
				setTimeout( function(){	
					self.pageUpdate();
				},100);
							
								
			}else{				
				self.pgAll.scrollTop(posT);
				
				self.animateEngine(self.moveItem, self.pageCurPos, false, false );
					setTimeout( function(){	
						self.pageUpdate();
				},100);
							
				if(isInCont !== undefined){							
					if(self.pageCurPos <= 0){						
						if(!self.rez && (ipadDevice || !isTouch) && self.url !== self.curPgChk){										
							for(var ik=0; ik < self.navArry.length; ik++){						
								if(self.navArry[ik].attr("data-id") === self.url){
									self.curP = self.navArry[ik];
									self.ir = ik > self.dirFind ? 1 : -1;	
									self.dirFind = ik;			
								}
							}								
							self.moveItem.css({"top":self.pageCurPos+ (self.stageWidth * self.ir) +"px"});	
							self.moveItem.stop()[animateSyntax]({"top":self.pageCurPos+"px"}, 700 ,"easeInOutQuart", function(){
								self.pageUpdate();	
							});							
						}else{								
							self.moveItem.stop().css({"top":self.pageCurPos+"px"});								
							self.pageUpdate();
						}					
					}
				}				
			}
			
			
			
			if("!home" !== self.url){
				self.firDrag = true;
				if($(".nextPage span").data( "url") === self.url || $(".nextPage span").data( "url") === undefined){
					self.pgNexPre.addClass("endPage");
				}else{
					self.pgNexPre.removeClass("endPage");
				}				
				self.pgNexPre.removeClass("autoPosition");
				if(lowResDesktop){ self.pgUp.fadeIn(200); }
				
			}else{
				self.pgNexPre.removeClass("endPage");
				self.pgNexPre.addClass("autoPosition");
				self.pgUp.fadeOut(200);
			}	
			
			self.curPgChk = self.url;
			
			setTimeout(function(){ self.videoRest(); }, 1000);
		
		},
		
		pageUpdate : function(){
			var self = this;
			for(var ik=0; ik < self.navArry.length; ik++){
				if(self.navArry[ik].attr("data-id") === self.url){
					self.updatePage(self.curP);
				}
			}						
			self.scroll_update();
		},
		



// The entire page can be reposition, resize and modified by page_setup function
		page_setup : function (){
			
			var self = this;

			self.stageWidth =  window.innerWidth;
			self.stageHeight =  window.innerHeight;

			self.winWidth =  self.stageWidth;
			self.winHeight =   self.stageHeight;
			
			self.ipadPort = (self.stageWidth >= 768 &&  self.stageWidth < 1024);
			self.mobile = self.stageWidth <= 959 && !self.ipadPort;
			self.midMobile = self.stageWidth <= 767 && self.stageWidth > 479;
			self.minMobile = self.stageWidth <= 480;
			isMobileChk = self.stageWidth < 768;		
			self.navTop = true;				
			
			//$(".tst").text(self.stageWidth);
			//$(".tst2").text(self.stageHeight);
			
			lowResDesktop = self.stageWidth <= 991;
			self.lowMobile = self.stageWidth < 768;
			
			self.StgHig = iPhoneDevice ? screen.height-60 : self.winHeight;	
			
			self.phHigSet = lowResDesktop ?  self.StgHig : self.stageWidth < 1220 ? self.StgHig-160 : self.StgHig-190; 
			
			
			$(".mainContent_holder").css({"visibility":"visible"});

			if(!lowResDesktop){
				self.pgAll.css({"height":self.StgHig, "overflow":"hidden"});				
				
			}else{
				self.pgAll.css({"height":"auto", "overflow-y":"auto"});
				if("!home" !== self.url){
					self.pgAll.css({"visibility":"visible"});
				}else{
					self.pgAll.css({"visibility":"hidden"});
				}		

			}
			
			self.parallaxBgUpdate();
			
			self.page_dimension();
			
			
			// Change the default image in img tag, if mobile version(data-src-small) image is assign on the img tag
			self.bdy.find('img').each(function() {
				var thsImg = $(this);
				var mobVer = thsImg.hasClass("lowResSupport") ? (self.winWidth <= 979 ? true : false) : self.mobile;
				
				if($(this).attr('data-src-small')){		
					if(!mobVer || !$(this).attr('data-src-small')){
						var img_Src = $(this).data('src').split(".");
						var iimg = $(this).attr('data-retina') === "yes" && retinaDevice ? img_Src[0]+"@2x."+ img_Src[1] : $(this).data('src');	
							if(String($(this).attr('src')) !== iimg){
								$(this).attr("src", iimg);
								$(this).data("i_src",$(this).data('src'));
							}			
					}else{
						if($(this).attr('data-src-small')){
							img_Src = $(this).attr('data-src-small').split(".");
							iimg = $(this).attr('data-retina') === "yes" && retinaDevice ? img_Src[0]+"@2x."+ img_Src[1] : $(this).attr('data-src-small');
							if(String($(this).attr('src')) !== String($(this).attr('data-src-small')) && String($(this).attr('src')) !== iimg){
								$(this).attr("src",iimg);
								$(this).data("i_src",$(this).attr('data-src-small'));
							}
						}
					}
				}
			});
			
			
			
			
			if(lowResDesktop || iPhoneDevice){
				$("body").find('.addVideo.backGroundVideo').each(function(){
					var vid2 = $(this);
					var vd = $(this).hasClass('.backGroundVideo.playInIpad');
					var img = !self.mobile ? vid2.attr("data-src") : (vid2.attr("data-src-small")? vid2.attr("data-src-small")  : vid2.attr("data-src"));	
					if(img !== undefined && !(ipadDevice && vid2.attr("data-url") !== undefined || !vd)  ){
						vid2.css({"background-image":"url("+img+")"});
					}
				});	
			}
			
			if(isTouch){
				$("body").find('.mainContent .addVideo.backGroundVideo').each(function(){
					var vid2 = $(this);
					var img = !self.mobile ? vid2.attr("data-src") : (vid2.attr("data-src-small")? vid2.attr("data-src-small")  : vid2.attr("data-src"));	
					if(img !== undefined ){
						vid2.css({"background-image":"url("+img+")"});
					}
				});	
			}

			var tppp = 0;
			
			$("body").find(".fullHeight").each(function(){
				var se2 = $(this);
				se2.css({"min-height": self.StgHig});
				if(se2.hasClass("fullResponse")){
					if(!isTouch){
						se2.find(".video_content.fullscreenVideo").css({"min-height": self.StgHig, "min-width": "100%"});
					}else{
						se2.find(".video_content.fullscreenVideo").css({"min-height": self.StgHig-120, "min-width": "100%", "top":60});
					}
				}else{
					if(self.mobile){ 
						se2.css({"min-height": "50px"});
						se2.css({"min-height": "auto"});
					}
				}				
			});
			
			$("body").find(".video_content.backGroundVideo").each(function(){
				$(this).css({"min-height": self.StgHig, "min-width": "100%"});
			});

			
			
			self.page_position();
			
			$('body').find('img.resize_align').each(function(){
				self.resizeImg($(this));
			});
			
			$("body").find('.masonry_items').each(function(){
				$(this).data("masonryElement").isotope('layout');	
			});
			
			if(isTouch){	
				$(".overlayPattern").hide();
			}
			
			if(lowResDesktop){ $(".mobile_Only").show(); }else{ $(".mobile_Only").hide(); }
			
			if(BigVid !== undefined){
				$("#big-video-wrap").css({"height": "100%"});
			}
		},
		
		
		parallaxBgUpdate : function(e){	
			
			var self = this;
			$("body").find('.parallax').each(function(){
				var img = !isMobileChk ? $(this).attr("data-src") : ($(this).attr("data-src-small")? $(this).attr("data-src-small")  : $(this).attr("data-src"));	
				var imgAtt = !isTouch ? "scroll" : "scroll";
				var vd = false;
				var thbg = $(this);
				thbg.find('.backGroundVideo').each(function(){
					vd = true;
				});	
				
				if(img !== undefined && !thbg.hasClass("bodyBackground") && img !== thbg.data("imgPath")){			
					if(img !== "none"){
						thbg.css({"background-image":"url("+img+")"});
						thbg.data("imgPath",img );
					}else{
						thbg.css({"background-image":"none"});
						thbg.data("imgPath","none");
					}
				}
			});			
		},
		
		
// The page_load function is used to position the page as per current menu
		page_load : function (e){
				
			var self = this;
			
			self.url = e  ? e : self.homePg;
			self.cM = $('a[href$="#'+self.url+'"]').parent();
			self.cM_= !self.onePage ? $('a[href="'+self.url+'"]') : $('a[href$="#'+self.url+'"]');
			self.pgViewed = false;
			
			$(".header").removeClass("menuOpen");
			
			for(var ik=0; ik < self.navArry.length; ik++){
				if(self.navArry[ik].attr("data-id") === self.url){
					if(self.navArry[ik-1]){
						$(".previousPage span").data( "url" , self.navArry[ik-1].attr("data-id") );
						}
					if(self.navArry[ik+1]){
						$(".nextPage span").data( "url" , self.navArry[ik+1].attr("data-id") );
					}
				}
			}			 
			
			for(var s=0; s<self.txtAniTim.length; s++){
				clearInterval(self.txtAniTim[s]);
				self.ff = -1;
			}			

			var isInCont = undefined;
			$("body").find('.contentWrapper').each(function(){
				if($(this).attr("data-id") === self.url){
					isInCont = $(this);
					try{ 
						$(this).find('.flexslider').each(function(){
							var fc = $(this);
							if(fc.data("loadInPop") === undefined && fc.data("slid") !== undefined){												
								fc.data("slid").resume();
							}
						});
					} catch (e) { }					
				}else{					
					try{ 
						$(this).find('.flexslider').each(function(){
							if($(this).data("slid") !== undefined){
								$(this).data("slid").pause();
							}
						}); 
					} catch (e) { }
				}
			});
			
			if(isInCont !== undefined){
				
				
				isInCont.find('.big_video').each(function(){
					var vmc = $(this);
					if(vmc.attr("data-background-video") !== undefined){
						vmc.append($("#big-video-wrap"));
						$("#big-video-vid").css({"display":"block"});
						var videoVolume = isNaN(vmc.attr("data-video-volume")) ? defaultVolume : Number(vmc.attr("data-video-volume"));
						if(bgVideopath !== vmc.attr("data-background-video"))	{
							bgVideopath = vmc.attr("data-background-video");
							if(BigVid !== undefined){
								var vpp = bgVideopath.split(",");
								if(vpp < 2){
									BigVid.show(vpp[0] );
								}else{
									BigVid.show(vpp[0], {altSource:vpp[1]}  );
								}
								
							}							
						}else{	
							if(BigVid !== undefined){
								$(".vidPlyPauBtn").data("view", true);	
								$(".vidPlyPauBtn").find("i").addClass("highlight");		
								BigVid.getPlayer().play();
							}
						}						
						try{ 
							if(BigVid !== undefined){ 
								BigVid.getPlayer().volume(videoVolume); 
							} 
						} catch (e) { }
					}
				});	
				
			}
			
			
			self.page_setup();
					
			if(isInCont !== undefined ){
				
				if(isTouch){
						setTimeout(function(){
						isInCont.find('.masonry_items').each(function(){	
							$(this).data("masonryElement").isotope('layout');		
						});
					},20);		
				}
				
				if(self.curPg === ""){
					self.curPg = self.prePg = self.url;	
					if(self.pgSub === undefined && self.onePage){
						window.location.href = "#"+self.url;	
					}
					self.cM = $('a[href$="#'+self.curPg+'"]').parent();
				}			
				return;
			}			
			
			self.firstScrol = true;
			
			// Check the previous and current page
			
			if(self.prePg === self.curPg){
				
				try { self.fflod.remove(); } catch (e) { }
												
				// Initialize to load the opening page as per history
				if(self.curPg === "" ){						
					self.curPg = self.prePg = self.url;	
					if(self.pgSub === undefined && self.onePage){
						window.location.href = "#"+self.url;	
					}
					self.cM = $('a[href$="#'+self.curPg+'"]').parent();
					self.pgAll.stop().animate({ scrollTop: "0px" }, 0, "easeInOutQuart");
				}else{	
					// Initialize to load current page, background and animate to left side			
					self.curPg = self.url;
					var pagScrl_Speed = window.pageYOffset !== 0 ? self.aniSpeed : 50;
					var con_Speed = 0;
					if(self.prePg !== self.url){
						self.pgAll.stop().animate({ scrollTop: "0px" }, pagScrl_Speed, "easeInOutQuart" ,function(){ });
					}else{
						if(isInCont !== undefined){
							self.page_position();
						}
						self.pgAll.stop().animate({ scrollTop: "0px" }, 500, "easeInOutQuart" );
					}
				}
			}

		},
	
		
		// Lazy load function
		lazyLoadInt : function(obj){
			var self = this;
			
			var imSrc = !self.mobileDevice ? obj.attr("href") : (obj.attr("data-src-small")? obj.attr("data-src-small")  :obj.attr("href"));
			var lodr = obj.parent().hasClass('large_image');
			lodr = !lodr ? obj.parent().hasClass('medium_image') : lodr;
			lodr = !lodr ? obj.parent().hasClass('fixedHeight') : lodr;
			lodr = !lodr ? obj.hasClass('lazyload_single') : lodr;

			if(obj.parent().hasClass('imgBorder')){
				lodr = !lodr ? obj.parent().parent().hasClass('fixedHeight') : lodr;
			}			
			var cc = obj.attr('class');
			var st = obj.attr('style');
			var $img;
			if(st){
				$img = $('<img class="'+cc+' style="'+st+'" />');
			}else{
				$img = $('<img class="'+cc+'" />');
			}

			$img.removeClass('lazyload_single');
			$img.removeClass('lazyload');
			obj.replaceWith($img);
			$img.hide();
				
			if(lodr){
				$img.parent().append('<div class="slider_loading"></div>');
				if($img.parent().height() > 50){
					$img.parent().children(":last-child").css({"top":$img.parent().height()/2-15});
				}
				$img.attr('src', imSrc).load(function() {
					$(this).parent().find(".slider_loading").remove();					
					if($(this).hasClass("resize_align")){	
						self.resizeImg($(this));						
					};
					$(this).fadeIn(300);
				}).error(function () { 
					$(this).parent().find(".slider_loading").remove();
				}).each(function() {
                  if(this.complete) { $(this).trigger('load'); }
				});
            }else{ 
				
				if($img.parent().hasClass('projImgPop')){
					$img.parent().append('<div class="slider_loading"></div>');
					$img.parent().children(":last-child").css({"top":$img.parent().height()/2-15});
					$img.parent().children(":last-child").css({"left":$img.parent().width()/2-15});
				}
				
				$img.attr('src', imSrc).load(function() {
					$(this).parent().find(".slider_loading").remove();
					if($(this).hasClass("resize_align")){
						self.resizeImg($(this));						
					};	
					$(this).fadeIn(300);
					
					var pim = $img.parent().parent().hasClass('projImgs');
					pim = pim ? pim : $img.parent().parent().parent().parent().hasClass('projImgs');
					if(pim){
						self.resizeImg($(this));
					}else{						
						var posY = $(this).hasClass("scale_fill");
						posY = !posY ? $(this).hasClass("scale_fit") : posY;
						posY = !posY ? $(this).hasClass("scale_cover") : posY;						
						if(posY){							
							if($(this).width() > $(this).parent().width()+5	){
								$(this).css({"left":-($(this).width()-$(this).parent().width())/2});
							}
							$(this).css({"top":-($(this).height()-$(this).parent().height())/2});
						}							
					}
				}).error(function () {
					$(this).parent().find(".slider_loading").remove();
				}).each(function() {
                  if(this.complete) { $(this).trigger('load'); }
				});	
			}
			
			return $img;
			
		},
		
		
		
		// Animating the required object
		
		animateObject : function (mc, scrlPos){
			var self = this;
			
			if(self.disableAnimation){
				return;
			}
						
			var mcPos = Math.round(mc.position().top);	
			
						
			if(mc.data("isSliderObj") || (mc.data("isDisplay")) ){
				return;
			}
		
			var par = 0;
			if(mc.attr("data-anchor-to") !== undefined){
				var mc2 = mc;
				for(var io=0; io<mc.attr("data-anchor-to").split(".").length; io++){
					mc2 = mc2.parent();
				}				
				par = mc2.position().top;
			}
		
			/* The below code is used to find the animation triggering point */
			
			var mcPos = Math.round(mcPos + mc.data("main_holder").position().top);						
			if((mcPos+par)-(self.winHeight-(self.winHeight/4-100)) > Math.abs(scrlPos)){
				return;
			}		

			/**/
			
			mc.data("isDisplay" , true);		
			
			
			if(mc.data("isAniObj")  && !isTouch){				
				self.animate_objectBeforeDisplay(mc);
			}
					
			if(mc.attr("data-animated-innerContent") === "yes"){
				var kk = 0;
				mc.css({"visibility":"visible"});
				mc.children().css({"visibility":"hidden"});
				mc.children().each(function(){										
					var mc2 = $(this);					
					mc2.stop();
					var aniTyp = mc.attr("data-animated-in") !== undefined ? mc.attr("data-animated-in") : "animated fadeIn";
					mc.data("in", aniTyp)
					kk = !isNaN(mc.attr("data-animated-time")) && mc.attr("data-animated-time") > kk ? Number(mc.attr("data-animated-time")) : kk+3;					
					var aniTim = self.aniDelay*kk;
					aniTim = cssAnimate ? aniTim : aniTim-50;				
					mc2.removeClass(aniTyp);
					
					setTimeout(function(){											
						if(cssAnimate){						
							mc2.css({"visibility":"visible"}).removeClass(aniTyp).addClass(aniTyp).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass(mc.data("in"));								
								if(mc.data("isAniObj") && !isTouch){
									self.animate_objectAfterDisplay($(this));
								}				
							});
						}else{
							
							var posTyp = mc2.css("position");
							if(posTyp === "static"){ mc2.css({"position":"relative"}); }	
							var tp = !isNaN(parseInt(mc2.css("top"))) ? parseInt(mc2.css("top")) : mc2.css("position") == "absolute" ? "auto" : 0;
							var tp2 = tp !== "auto" ? tp2+15 : "auto";
													
							mc2.css({"visibility":"visible", "opacity":0, "top":tp2}).removeClass(aniTyp).animate({"opacity":1, "top":tp},350, "easeInOutQuad",function(){
								mc2.css({"position":posTyp});								
								$(this).removeClass(mc.data("in"));							
								if(mc.data("isAniObj") && !isTouch){
									self.animate_objectAfterDisplay($(this));
								}				
							});
						}
					}, aniTim );
				});
			}else{
				mc.stop();					
				var aniTyp = mc.attr("data-animated-in") !== undefined ? mc.attr("data-animated-in") : "animated fadeIn";
				mc.data("in", aniTyp);
				var kk = !isNaN(mc.attr("data-animated-time")) && mc.attr("data-animated-time") > kk ? Number(mc.attr("data-animated-time")) : kk+3;
				var aniTim = !isNaN(mc.attr("data-animated-time")) ? self.aniDelay*mc.attr("data-animated-time") : self.aniDelay*(kk);
				aniTim = cssAnimate ? aniTim : aniTim-50;	
				mc.removeClass(aniTyp);					
				setTimeout(function(){	
									
					if(cssAnimate){						
						mc.css({"visibility":"visible"}).removeClass(aniTyp).addClass(aniTyp).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass($(this).data("in"));
							if(mc.data("isAniObj") && !isTouch){
								self.animate_objectAfterDisplay($(this));
							}					
						});
					}else{
						var posTyp = mc.css("position");
						if(posTyp === "static"){ mc.css({"position":"relative"}); }
						
						var tp = !isNaN(parseInt(mc.css("top"))) ? parseInt(mc.css("top")) : mc.css("position") == "absolute" ? "auto" : 0;
						var tp2 = tp !== "auto" ? tp+15 : "auto";
						
						
						
						mc.css({"visibility":"visible", "opacity":0, "top":tp2}).removeClass(aniTyp).animate({"opacity":1, "top":tp}, 350, "easeInOutQuad",function(){
							mc.css({"position":posTyp});	
							$(this).removeClass(mc.data("in"));							
							if(mc.data("isAniObj") && !isTouch){
								self.animate_objectAfterDisplay($(this));
							}				
						});
					}
				}, aniTim );
			}
			
		},
		
		animate_objectBeforeDisplay : function(obj){
			var self = this;
			obj.find('.graph_container li').each(function() {
				$(this).each(function() {
					$(this).children(':first-child').css("width","100%");
					 $(this).find(".display").text(0);
				});
			});	
			
			if(self.knobAni){
				try{					
					obj.find('.animate_counter').each(function(){
						 var selK = $(this);
						 if(selK.hasClass("knob")){
						 	selK.val(0).trigger("change");
						 }
						 selK.data("display").text(0);
					});	
				} catch (e) { }	
			 }
			
		},
		
		
			
		animate_objectAfterDisplay : function(obj){
			var self = this;
			obj.find('.graph_container').each(function(){
					self.graph_display($(this));
				});
				
			if(self.knobAni){						
				try{					
					obj.find('.animate_counter').each(function(i){			
						var selK = $(this);
							selK.data("ani").css({"top":0})
							$(selK.data("ani")).animate({
								'top': selK.data("val")
							  },
							  {
								step: function(now, fx) {	
									if(selK.hasClass("knob")){
								  		selK.val(now).trigger("change");
									}
								  	if( selK.data("display")){
									 	selK.data("display").text(Math.round(now));
								  	}
								},
								duration: 2500, 
								easing: "easeInOutQuad"							 
							  });	
					});
				} catch (e) { }	
			}
			
		},
		
		
		
		// Initialize video cover image
		intVideoObject : function(obj){
			var self = this;
			obj.find('.addVideo').each(function(){		
				var addCover = false;			
										
				$(this).find('.video_hover').each(function(){
									
					addCover = true;
					var vv =  $(this);				
									
					var vid = $(this).parent();
					vid.data("added", true);
									
					vv.click(function(){						
						$("body").find('.addVideo').each(function(){
							$(this).data("isPlaying", false);
							if($(this).parent().hasClass("tabVideo")){ return; }
							
							if(!$(this).data("added")){
								vid.children(':first-child').removeClass("enablHardwareAcc");
							}
							$(this).find('.vid').remove();
							if(!$(this).hasClass("backGroundVideo")){
								$(this).find('img').fadeIn();
								$(this).find('.video_hover').fadeIn();
								$(this).find('.video_hover').css({"z-index":"5"});
							}
						});
			
						vid.prepend('<div class="vid" ></div>');
						vid.data("added", true);
						vid.data("isPlaying", true);
						vid.data("url_", self.curP.attr("data-id"));
						vid.find('.video_hover').css({"z-index":"-1"});
						vid.find('img').fadeOut(100,function(){
							var vid_ = $(this).parent();							
							vid_.children(':first-child').embedPlayer(vid_.attr('data-url'), vid_.width()+"px", vid_.height()+"px", vid_.width(), false); 
							}
						);			
					});
				});	
				
				
			});
			
		},
		
		// Video Reset function
		videoRest : function(obj){
			var self = this;
			
			$("#fancybox-wrap").find('.addVideo').each(function(){	
				$(this).find('.vid').each(function(){
					$(this).removeClass("enablHardwareAcc")
					$(this).remove();
				});
				$(this).find('img').show();
				$(this).find('.video_hover').show();
				$(this).find('.video_hover').css({"z-index":"15"});
			});
			
			try{
				$("body").find('.addVideo').each(function(){		
					if(!$(this).hasClass("backGroundVideo")  && !$(this).data("isPlaying") || ($(this).data("url_") !== self.curP.attr("data-id")) ){
						$(this).find('.vid').each(function(){
							$(this).removeClass("enablHardwareAcc")
							$(this).remove();
						});
						$(this).find('img').show();
						$(this).find('.video_hover').show();
						$(this).find('.video_hover').css({"z-index":"15"});
					}
					if($(this).data("isPlaying") ){
						var vid = $(this);
						var www = Math.round(vid.width());
						var hhh = Math.round(vid.height());
						vid.find("iframe").css({"width": www+"px", "height": hhh+"px"});						
						if(isTouch){ vid.find("iframe").css({"top":self.headerFixedHig }); }
					}
				});
			} catch (e) { }
 			
			try{								
				if(!self.mobile){
					self.curP.find('.addVideo.backGroundVideo').each(function(){
						var vid = $(this);
						var www = Math.round(vid.width());
						var hhh = Math.round(vid.height());
						var vidW = !self.mobile ? www * 1.8 : www;
						var vidH = !self.mobile ? hhh * 1.8 : hhh-100;
						var ww = vidW;	
						var hh = vidH;
						
						if(!vid.data("added") && vid.data("inMain") === undefined){							
							vid.data("url_", self.curP.attr("data-id"));
							vid.prepend('<div class="vid" ></div>');
							vid.children(':first-child').addClass("enablHardwareAcc");
							vid.find('.video_hover').css({"z-index":"5"});							
							vid.find('img').show();
							vid.children(':first-child').embedPlayer(vid.attr('data-url'), vidW+"px", vidH+"px", true);	
						}
						vid.data("added", true);
						vid.children(':first-child').css({ "top": -Math.round((hh-hhh)/2)});
						vid.find("iframe").css({"width": ww+"px", "height": hh+"px" });
					});	
					
				}				
				$("body").find('.addVideo.backGroundVideo').each(function(){
					var vid_ = $(this);
							
					if(vid_.data("url_") !== self.curP.attr("data-id")){
						vid_.data("added", false);
						vid_.find('.vid').each(function(){
							$(this).removeClass("enablHardwareAcc")
							$(this).remove();
						});
						vid_.find('img').show();
						vid_.find('.video_hover').show();
						vid_.find('.video_hover').css({"z-index":"5"});
					}
				});

			  } catch (e) { }
		},
		
		
		
// Initialize the History 
		history : function(){
			var self = this;

			(function($){
				var origContent = "";			
				function loadContent(hash2) {
					window.location.href.substr(0, window.location.href.indexOf('#'));
					var splt = hash2.split("?");
					var hash = !self.onePage ? self.homePg : splt[0];
					self.pgSub = splt[1];

					if(hash !== "") {
						if(origContent === ""  && self.curPg === "") {
							origContent = $('.contentWrapper [data-id="'+"#"+self.homePg+'"]');
						}
						if(self.hisPath !== hash ){
							self.hisPath = hash;
							self.page_load(hash);
						}else{
							
							if(self.pgSub !== undefined){
								var p2 = self.pgSub.split("=");								
							}
						}
					} else {

						if(origContent !== "" && self.curPg === "") {
							if(self.hisPath !== hash ){
								self.hisPath = hash;
								self.page_load(self.homePg);
							}
						}else{
							if(!self.onePage){
								if(self.pgSub !== undefined && self.projFm){
									p2 = self.pgSub.split("=");
								}
							}
						}
					}
					
					if(hash === "" && self.curPg === ""){
						self.page_load(self.homePg);
					}
				}

				$(document).ready(function() {
					$.history.init(loadContent);
					$('#navigation a').not('.external-link').click(function() {
						var url = $(this).attr('href');
						url = url.replace(/^.*#/, '');
						$.history.load(url);
						return false;
					});
				});
				
			})(jQuery);
			
		},
		
		
// Add scrollbar
		addScrollbar : function (){
			var self = this;
			$('body').find(".m-Scrollbar").each(				
				function(){	
						$(this).data("scrollbarAdded", true);
						$(this).mCustomScrollbar({
							theme: "light-thin",
							autoHideScrollbar: true,
							advanced:{
								autoScrollOnFocus: false
							},
							scrollInertia: 500,
							mouseWheelPixels: 320,						
							callbacks:{
							  onScroll:function(){
								  if(!self.disableAnimation){
										if(mcs.top < -150){												
											self.curP.find('[data-animated-in]').each(function(){
												var tps = mcs.topPct < 90 ? mcs.top : 1000000;
												self.animateObject($(this), tps);
											});				
										}	
								  }
							  }
							}
						});
					}
				);
		
			$('body').find(".scroll-pane").each(
				function()
					{	self.apis.push($(this).jScrollPane({ autoReinitialise: true, verticalDragMinHeight : 70 }).data().jsp);
					}
			);			
			
			$(".mCSB_scrollTools").on('mouseover.scrolEvent', function() {	
				$(this).find(".mCSB_dragger .mCSB_dragger_bar")[animateSyntax]({"width":"8px"}, 300, "easeInOutQuart")
			});
			
			$(".mCSB_scrollTools").on('mouseleave.scrolEvent', function() {	
				if(!self.scrlPress){
					$(this).find(".mCSB_dragger_bar")[animateSyntax]({"width":"2px"}, 300, "easeInOutQuart");
				}
			});
			
			
			$(".mCSB_scrollTools .mCSB_dragger_bar").on('mousedown.scrolEvent', function() {	
				self.scrlPress = true;
			});
			
			$("body").on('mouseup.scrolEven', function() {
				$(".mCSB_scrollTools .mCSB_dragger_bar")[animateSyntax]({"width":"2px"}, 300, "easeInOutQuart");
				self.scrlPress = false;
			});
			
		},
		
		
			

// Remove scrollbar			
		removeScrollbar : function(){
          var self = this;
				if (self.apis.length) {
					$.each(
						self.apis,
						function(i) {
									this.destroy();
							}
						);
					self.apis = [];
				}
		},
		
// Graph display function
		graph_display : function (e){
			e.find('li').each(function() {
				var selK = $(this).find(".display");
				selK.text("0%");
				$(this).each(function() {
					$(this).children(':first-child').css("width","100%");
					$(this).children(':first-child').stop();	
					var vall = parseInt($(this).attr('data-level')) >= 100 ? "0%" : (100 - parseInt($(this).attr('data-level')))+"%";						  
					$(this).children(':first-child').animate( { width: vall },
							  {
								step: function(now, fx) {						
								  	selK.text(Math.round(now > 100 ? "0" : (100 - parseInt(now)) ));
								},
								duration: 1500, 
								easing: "easeInOutQuad"							 
					});	
				});
			});
		},
		
// Window Resize function
		windowRez : function (){			
			var self = this;
			if(Number(self.bdy.data("width")) !== Number($(window).width()) || Number(self.bdy.data("height")) !== Number($(window).height())){
				self.bdy.data("width", Number($(window).width()));
				self.bdy.data("height", Number($(window).height()));
				self.rez = true;
				self.page_setup();
				self.rez = false;
			}
		},
	
	
	
	
		previewSetting : function (){
			var self = this;
			// Preview_set
			self.curColor = "color-orange";
			self.curTempColor = "-orange";
			
			var colr = $("#set_color").attr("href");
			if( colr.split("blue").length > 1){
				self.curTempColor = "-blue";
			}else if( colr.split("red").length > 1){
				self.curTempColor = "-red";
			}
				
			
			self.setting_tool = $(".setting_tools");
			setPreviewBtn();
			
			
			$(".setting_tools .iButton").each(function(){				
				$(this).on("click", function(){
					if(self.setting_tool.hasClass("hideTool")){
						self.setting_tool.removeClass("hideTool");
					}else{
						self.setting_tool.addClass("hideTool");
					}
				});
			});
			
			$(".mUp").on("click", function(){
				$(".setting_tools").addClass("mUp");
				});
			
			$(".mDown").on("click", function(){
				$(".setting_tools").removeClass("mUp");
				});
				
			
			$(".colWhite").on("click", function(){
				$("body").addClass("white_ver");
				$(".contentWrapper").removeClass("inverseStyle");
				setPreviewBtn();
				});
			
			$(".colNight").on("click", function(){
				$("body").removeClass("white_ver");
				$(".contentWrapper").addClass("inverseStyle");
				setPreviewBtn();
				});
			
			
			
			/* --- */
			
			$(".mType1").on("click", function(){
				$(".header").removeClass("menuInverse");
				setPreviewBtn();
			});	
			
			
			$(".mType2").on("click", function(){
				$(".header").addClass("menuInverse");
				setPreviewBtn();
			});	
			
			
			
			/* --- */
			
			$(".overCol1").on("click", function(){
				$(".homePageContent .overlayBg").removeClass("homeBg_color2");
				$(".homePageContent .overlayBg").removeClass("homeBg_color3");
				$(".homePageContent .overlayBg").addClass("homeBg_color1");
			});	
			
			
			$(".overCol2").on("click", function(){
				$(".homePageContent .overlayBg").removeClass("homeBg_color3");
				$(".homePageContent .overlayBg").removeClass("homeBg_color1");
				$(".homePageContent .overlayBg").addClass("homeBg_color2");
			});
			
			$(".overCol3").on("click", function(){
				$(".homePageContent .overlayBg").removeClass("homeBg_color2");
				$(".homePageContent .overlayBg").removeClass("homeBg_color1");
				$(".homePageContent .overlayBg").addClass("homeBg_color3");
			});
			
			
			/* --- */
			
			
			$(".temHigLight1").on("click", function(){
				if(!$(this).hasClass("active")){
					$("#set_color").attr("href", "css/color-orange"+".css");
					self.curTempColor = "-orange";
					setPreviewBtn();
				}
			});
			
			$(".temHigLight2").on("click", function(){
				if(!$(this).hasClass("active")){
					$("#set_color").attr("href", "css/color-blue"+".css");
					self.curTempColor = "-blue";
					setPreviewBtn();
				}
			});
			
			$(".temHigLight3").on("click", function(){
				if(!$(this).hasClass("active")){
					$("#set_color").attr("href", "css/color-red"+".css");
					self.curTempColor = "-red";
					setPreviewBtn();
				}
			});
			
			function setPreviewBtn(){
				$(".mType1, .mType2, .colWhite, .colNight, .colBlack").removeClass("active");
				$(".temHigLight1, .temHigLight2, .temHigLight3, .sType1, .sType2").removeClass("active");
				
				var cUrl = $("#set_color").attr("href");
				
				if( cUrl.split("white").length > 1){
					$(".colWhite").addClass("active");
					self.curColor = "color-white";
				}else if( cUrl.split("night").length > 1){
					$(".colNight").addClass("active");
					self.curColor = "color-night";
				}else{
					$(".colBlack").addClass("active");
					self.curColor = "color-black";
				}
				
				if($(".header").hasClass("menuInverse")){
					$(".mType2").addClass("active");
				}else{
					$(".mType1").addClass("active");
				}
				
				if($("body").hasClass("disable_slideline")){
					$(".sType2").addClass("active");
				}else{
					$(".sType1").addClass("active");
				}
				
				if($("body").hasClass("white_ver")){
					$(".colWhite").addClass("active");
				}else{
					$(".colNight").addClass("active");
				}
				

				if( cUrl.split("blue").length > 1){
					$(".temHigLight2").addClass("active");
				}else if( cUrl.split("orange").length > 1){
					$(".temHigLight1").addClass("active");
				}else{
					$(".temHigLight3").addClass("active");
				}
				
				
			}	
		}
	};

		
// Initizlize and create the main plug-in
	$.fn.mainFm = function(params) {
		var $fm = $(this);
		var instance = $fm.data('GBInstance');
		if (!instance) {
			if (typeof params === 'object' || !params){
				return $fm.data('GBInstance',  new mainFm($fm, params));	
			}
		} else {
			if (instance[params]) {					
				return instance[params].apply(instance, Array.prototype.slice.call(arguments, 1));
			}
		}
	};

	
})( jQuery );