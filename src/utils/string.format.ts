import { Injectable } from '@angular/core';

@Injectable()
export class Format {
  constructor() {}
    public static stringFormat(text, ...rest: string[]) {
        if (!text) return text; 
        for (var i = 1; i < arguments.length; i++) { 
            var pattern = new RegExp("\\{" + (i - 1) + "\\}", "g"); 

            text = text.replace(pattern, arguments[i]);
        }
        return text;
    }
}



