var weapon2;
var miss;
var hit;
var buzz;
var splat;
var deaths;
var weapon;
//var puntos = 0;
var x = 100,y = 100;

function draw()
{
	textout(canvas,font,"Hello World!",x,y,24,makecol(0,0,0));
	simple_blit(deaths,canvas,0,0);
	draw_sprite(canvas,buzz,x,y);
	draw_sprite(canvas,(mouse_b ? weapon2 : weapon),mouse_x,mouse_y); 
//	textout(canvas,font,"Puntos: "puntos,x,y,makecol(0,0,0));
}

function update()
{
x += rand()%5-2;
y += rand()%5-2;
if (mouse_pressed)
{
		if (distance(x,y,mouse_x,mouse_y)<50)
		{
			rotate_sprite(deaths,splat,x,y,rand()%360);
			x = rand()%SCREEN_W;
			y = rand()%SCREEN_H;
			play_sample(hit);
			puntos++;
		} else {
			play_sample(miss);
			
		}
}
}

function main()
{
	enable_debug('debug');
	allegro_init_all("game_canvas", 640, 480);
	miss=load_sample('miss.mp3');
	hit=load_sample('hit.mp3');
	weapon2=load_bmp('weapon2.png');
	buzz=load_bmp('buzz.png');
	splat=load_bmp('splat.png');
	weapon=load_bmp('weapon.png');
	hide_mouse();
//	deaths = create_bitmap(SCREEN_W,SCREEN_H);
	deaths = load_bmp('window.png');
	ready(function(){
		loop(function(){
			clear_to_color(canvas,makecol(255,255,255));
			update();
			draw();
		},BPS_TO_TIMER(60));
	});
	return 0;
}
END_OF_MAIN();

 
