(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_2552202 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_2552202_1();

	// image_replace
	this.instance = new lib.replace_image_2552202();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665.3,800);


// symbols:
(lib.replace_image_2552202 = function() {
	this.initialize(img.replace_image_2552202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,800);


(lib.reflect_inner = function() {
	this.initialize();

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-296.9).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.reflect_mask_2552202 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.1,-106.6,338.3,213.4);


(lib.glitter_inner_sphere = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100,100);


(lib.reflect = function() {
	this.initialize();

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.setTransform(0,-298.4,1.2,1.2,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-421.5,338.3,843.2);


(lib.reflect_container_cjs_2552202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		this.preview.visible = false;
	}
	this.frame_20 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

	// preview
	this.preview = new lib.reflect();
	this.preview.setTransform(-0.3,0,1,1,0,0,0,-0.4,0);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preview}]}).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.setTransform(-0.3,528.4,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-527.9},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-421.5,338.3,843.2);


(lib.glitter_inner = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.setTransform(0,0.1,1.5,0.086,-44.9);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.setTransform(0,0,0.334,0.334);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.setTransform(0,0,1.5,0.086,45);

	this.instance_3 = new lib.glitter_inner_sphere();

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter = function() {
	this.initialize();

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.reflect_wrapper_2552202 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_2552202();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-421.5,338.3,843.2);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {
		
	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

	// mc
	this.lux = new lib.glitter();

	this.timeline.addTween(cjs.Tween.get(this.lux).to({_off:true},1).wait(19).to({alpha:0,_off:false},0).to({scaleX:0.73,scaleY:0.73,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.49)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.glitter_wrapper = function() {
	this.initialize();

	// cjs
	this.instance = new lib.glitter_container_cjs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56,-56.1,112.2,112.3);


(lib.sign_effect_2552202_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(453.4,571.5);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(609.2,488.8);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(387,471.8);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(457.3,487.3,0.725,0.725);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(536.8,440.8,0.692,0.692);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(374.4,560,0.66,0.66);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(285.8,621.7);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(559.1,554.3);

	// mask
	this.reflect_mask = new lib.reflect_mask_2552202();
	this.reflect_mask.setTransform(448,519.3);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(308.6,313);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_2552202();
	this.reflect_wrapper.setTransform(278.8,519.3);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(229.7,97.7,435.6,843.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;