
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace TM1637DigitalTube {

    //% block="Init number[NUM] TM1637 CLK [CLKPIN] DIO [DIOPIN]" blockType="command"
    //% CLKPIN.shadow="dropdown" CLKPIN.options="CLKPIN"
	//% NUM.shadow="dropdown" NUM.options="NUM"
    //% DIOPIN.shadow="dropdown" DIOPIN.options="DIOPIN"
    export function TM1637Init(parameter: any){
        let clk=parameter.CLKPIN.code;
        let dio=parameter.DIOPIN.code;
		let num=parameter.NUM.code;

        Generator.addInclude("TM1637Include","#include <SevenSegmentTM1637.h>");
        Generator.addInclude("TM1637IncludeExtended","#include <SevenSegmentExtended.h>");
        Generator.addObject(`TM1637Object_${num}`,"SevenSegmentExtended",`tm1637_${num}(${clk},${dio});`);
        Generator.addSetup(`TM1637Init_${num}`,`tm1637_${num}.begin();`);
        
    }

    //% block="Number[NUM] TM1637 Display [STR]" blockType="command"
	//% NUM.shadow="dropdown" NUM.options="NUM"
    //% STR.shadow="string" STR.defl="1234"
    export function TM1637DisplayPOS(parameter:any){
        
        let str=parameter.STR.code;
		let num=parameter.NUM.code;
        Generator.addCode(`tm1637_${num}.print(${str});`);
    }

    //% block="Number[NUM] TM1637  Clear" blockType="command"
	//% NUM.shadow="dropdown" NUM.options="NUM"
    export function TM1637Clear(parameter:any){
        let num=parameter.NUM.code;
        Generator.addCode(`tm1637_${num}.clear();`);
    }

    //% block="Number[NUM] TM1637  Display Time [TIME]:[MIN] COLON [COLON]"
    //% TIME.shadow="range" TIME.params.min="0" TIME.params.max="12" TIME.defl="6" 
    //% MIN.shadow="range" MIN.params.min="0" MIN.params.max="59" MIN.defl="30" 
    //% COLON.shadow="dropdownRound" COLON.options="COLON"
	//% NUM.shadow="dropdown" NUM.options="NUM"
    export function TM1637DisplayTime(parameter:any){
        let tm=parameter.TIME.code;
        let min=parameter.MIN.code;
        let col=parameter.COLON.code;
		let num=parameter.NUM.code;
       
        Generator.addCode(`tm1637_${num}.printTime(${tm},${min},${col});`)
    }

   
}
