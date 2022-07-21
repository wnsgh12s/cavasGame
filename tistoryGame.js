function 게임시작(){
  let 캔버스 = document.querySelector('canvas')
  let 컨택스트 = 캔버스.getContext('2d')
  캔버스.width = 700
  캔버스.height = 700
  class Player{
    constructor(위치,이미지경로,프레임){
      this.위치 = 위치;
      this.이미지 = new Image()
      this.이미지.src = 이미지경로
      this.이미지.onload = ()=>{
        this.넒이 = this.이미지.width;
        this.높이 = this.이미지.height;
      }
      this.프레임 = 프레임
      this.카운트 = 0
    }
    그리기(){
    컨택스트.drawImage(
      this.이미지,
      this.프레임.val * 16,
      0,
      this.넒이 / 8,
      this.높이,
      this.위치.x,
      this.위치.y,
      this.넒이 / 8,
      this.높이)
    }
    업데이트(){
      this.카운트 ++
      if(this.카운트 % 50 === 0){
        if(this.프레임.val < this.프레임.max -1 ){
          this.프레임.val ++
        }else{
          this.프레임.val = 0
        }
      }
    }
  }

  const 플레이어 = new Player({
      x:100,
      y:100
    }
    ,'./images/pumpkin_dude.png'
    ,{
      max:8,
      val:0
    }
    )
    
  let 키 = {
    i:{
      pressed:false
    },
    j:{
      pressed:false
    },
    k:{
      pressed:false 
    },
    l:{
      pressed:false
    }
  }
  
  window.addEventListener('keydown',(e)=>{
    switch(e.key){
      case 'i' : 키.i.pressed = true
      break
      case 'j' : 키.j.pressed = true
      break
      case 'k' : 키.k.pressed = true
      break
      case 'l' : 키.l.pressed = true
      break
    }
  })

  window.addEventListener('keyup',(e)=>{
    switch(e.key){
      case 'i' : 키.i.pressed = false
      break
      case 'j' : 키.j.pressed = false
      break
      case 'k' : 키.k.pressed = false
      break
      case 'l' : 키.l.pressed = false
      break
    }
  })

  function 애니메이션(){
    requestAnimationFrame(애니메이션)
    컨택스트.clearRect(0,0,캔버스.width,캔버스.height)
    플레이어.그리기()
    플레이어.업데이트()
    if(키.i.pressed){
      플레이어.위치.y -=2
    }else if(키.j.pressed){
      플레이어.위치.x -=2
    }else if(키.k.pressed){
      플레이어.위치.y +=2
    }else if(키.l.pressed){
      플레이어.위치.x +=2
    }
  }
  애니메이션()
}

게임시작()