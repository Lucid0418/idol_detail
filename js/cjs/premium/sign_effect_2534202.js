(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sign_effect_2534202 = function() {
	this.initialize();

	// sign
	this.sign_effect = new lib.sign_effect_2534202_1();

	// image_replace
	this.instance = new lib.replace_image_2534202();

	this.addChild(this.instance,this.sign_effect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,0,690.6,800);


// symbols:
(lib.replace_image_2534202 = function() {
	this.initialize(img.replace_image_2534202);
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


(lib.reflect_mask_2534202 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("A2sM8IAKAAQAtgeAzgcQAugZApgiQCkiDCBioQAxhAA3g8IAAgKIAAgKQBsiTBWipQABgCAFAAQAAgFACgEIADgGQgXgXgXAlQgEAGgGABQhiAXAJhZIAKAAIAAgKQBhhKBphAQADgCAFAAQAXgXACgvIAFAAIAAgKIAAhkIAKAAQAFAAADgDQACgCAAgFIAAgKQA6gIALAmQABAFAAAFQASAlgNA+QAAABgFAAQAMAhA6gOQAbgGADARQAtAZAXgKQAMgGAJgOQAJgRAJgUQAbg7BfAPQAtAIAPAtQABADAIgFQAYgNAmgCIAAgKQArAAAtAFIAAAFQBPAVgaB1Qg1DrieCHQAAAFgCAEQgyBZhOA+QAAAFgBAAQhjAUAUhpQgFAAgCgDQgWgcgBgxIgFAAQADhGgmAUQAAAFgCAEQhECXhuBuQgGArgqAMQhJAVABhgIAKAAIAAgKQBWhkBGhxIA2hXIAAgKIAAgKQAegZAFg1IAFAAIAAgKIAAgeQAAgKADgJIAEgMQAVhOg6ACQhOADgXA/QgPAsgUAsQguBjg7BbIgHAMQhlDCiXCRQAAAFgCADQhvCAh/ByQhNBThkA+IgPAIQgcALgUAAQg6AAAIhegAjohuIAAAKQgBCQApBoQCFiTBWi/QAVgvgqAHQgxAigdA4QgFAKgHADQhrAqAEh9IAAgFIgtBpgAOKK6IAAgKQgRgSAIgqQAMg6ghgMIgKAAQhkAPAKhfIAKAAQAFAAADgDQACgCAAgFIAAgKQBMgFAqgmQACgCAAgFIAAgKIAAhkIAKAAIAAgKQAFAAADgDQACgCAAgFIAAgKQBvgZgKCRQgDAwAMAgQAPAAAOADIALACQBUgEgIBOQgBALgHACQhEAShGAKQAAAyACAyQACAhgRAKQgeARgVAAQgkAAgKgygAgCGYQAPgDAHgPQABgCAFAAIAAgKIAAgKQCeiABNjKIgFAAIgKAAQglAcgnAbQgOAKgOAHQhXApABhnQAFgFAGgDQAEgCAFAAIAAgKQBDg+BggdQAigKgUgXQgMgOgPgKQgzg0AehLQABgDAKgCQAggFAIARQAzAiAVA7QAIAWABAZQACAvAhAUQAEADAAAKQARARgCApIAFAAQAUgKAVgJQAEgBAFAAQAagFAQgNQADAAAFAAIAAgFQglgDgNgWIAAgFQgggDACggQgFAAgBgCQgEgIAAgKIgFAAQAGhCgfgYQgFAAgEgCQgegJAJgxIAAgKIAAgKQBlhZCIg8QABAAAAAAQABgBAAAAQAAAAgBgBQAAAAgBAAQglgNgTgbQgFgIgkAHQgKACgKAAQAAAFgBAAQhmAXgbg6QgFAAAAgBQgFgdAAgeIAAgKQA0gIBOgCIAeAAQAKAAAIgEQACgBAAgFIAAgKIAAhGIAKAAIAAgKIAAgKQBHgdAYA9QAFANAHAKQADAFAKAAIAKAAQA7gQAag0QAQggA5ASQAHACAIAEQAMAGAPAAIAAgKIAKAAIAKAAIAAgKQAugGAWATQACACAAAFQAdArgmAcQgfAXgpAIQg9ALgTAuQgSAqgpATIAAAKIAAAKQAngGAggNQAEgBAFAAQAbAHAHgPQABgCAFAAIAAgKQB7gcgIBhIgFABQAAAFgCABQg6ArhkABQAAAFgCACQgDADgFAAQAFAKAIAHQACADAFAAQAhAHAPAYQACAEAAAFQAAAFADACQACADAFAAQARAIgIAfQgfByhiAvIAAAKIAKAAIAKAAIAAgKQBegQBqABIAAAFQAsAGgJA1QAAABgFAAQAAAFgCAEQgWAnhMgKIgKAAIgKAAQAAAFgBAAQgxAKgyAFIgKAAIgeAAIgKAAIAAAKIAAAFQghABgRAOIgBDIQAAAQAVgGQDEhkCfiHQB7hlBwhwIAAgKQAwgSAHg+IAFAAIAAgKIAAgKQAKgFAIgIQACgCAAgFIAAgKQBxgSgSBrQAAABgFAAQAAAFgCADQhcB7h0BjQAAADgCADQgWAcgkAOQAAAFgCADQgRAXgfAJQgFAAgEACQgGADgFAFQAAAKgFAFQgVAXgaATQioB/i7BvQguAbhDAIQAAAFgBAAQhwASglg/QgFAAgCgDQgVgTgCgmIAAgKIAAgUIgKAAQgwgDgfAPQhNAlhKApQAAAFgCADQgRAXgfAJQgDAggYANQgIAFgGABQgPADgLAAQg6AAAHhKgAR6nMIgFgBQgFg7AAg8IgKABQhyAXAEheIAAgKIAAgKQBCgJAlgnQACgCAFAAIAAgKIAAgKIAAh4IAKAAIAKAAIAAgKIAAgKIAAgUQAFAAADgDQACgCAAgFIAAgKQAugGAWATQACACAAAFQARgBgGAVIgBAKQASAcgEA0QgEAyAAAyQAZAPAtAAIAAAFQBGAcg1A7QgCADgFAAIAAAFQgygBgeAQIAAAyIAAAKQASAcgMAzQgBABgFAAQAAATgMADQgVAGgQAAQg5AAAGhEg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-145.3,-92.2,290.9,184.6);


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
	this.lighter_tgt.setTransform(0,-256.5,1.032,1.032,0,0,-19.9);
	this.lighter_tgt.compositeOperation = "lighter";

	this.addChild(this.lighter_tgt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-362.4,290.9,724.9);


(lib.reflect_container_cjs_2534202 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-0.3,454.9,1,1,0,0,0,-0.4,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:0,y:0},9,cjs.Ease.get(-0.99)).to({regY:0.1,y:-454.4},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-362.4,290.9,724.9);


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


(lib.reflect_wrapper_2534202 = function() {
	this.initialize();

	// cjs
	this.reflect = new lib.reflect_container_cjs_2534202();
	this.reflect.compositeOperation = "lighter";

	this.addChild(this.reflect);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-362.4,290.9,724.9);


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


(lib.sign_effect_2534202_1 = function() {
	this.initialize();

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.setTransform(151.1,643);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.setTransform(286,571.5);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.setTransform(94.7,556.6);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.setTransform(154.5,572.1,0.725,0.725);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.setTransform(223.5,530.8,0.692,0.692);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.setTransform(86.1,638.1,0.66,0.66);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.setTransform(5.5,683.8);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.setTransform(242.8,628.8);

	// mask
	this.reflect_mask = new lib.reflect_mask_2534202();
	this.reflect_mask.setTransform(146.3,599.2);
	this.reflect_mask.alpha = 0;

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(145.9,345.7);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_2534202();
	this.reflect_wrapper.setTransform(0.9,599.2);

	this.reflect_wrapper.mask = mask;

	this.addChild(this.reflect_wrapper,this.reflect_mask,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.5,236.7,392.7,724.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;