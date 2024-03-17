---
date: 2024-03-16 00:00:00
layout: post
title: 프로그래머스 자연수 뒤집어 배열[자바]
subtitle: 프로그래머스 자연수 뒤집어 배열 Lv1[자바]
description: 자바언어로 자연수 뒤집어 배열
image: /assets/img/programmers1.png
optimized_image: /assets/img/programmers.png
category: algorithm
tags:
  - study
  - java
  - algorithm
author: byeongjunjang
paginate: true
---

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/12932">자연수 뒤집어 배열</a>

## 문제 설명

> 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.  
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
    
### 제한사항

> n은 10,000,000,000이하인 자연수입니다.

### 입출력 예

<table>
  <thead>
    <tr>
      <th>n</th>
      <th>return</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>12345</td>
      <td>[5,4,3,2,1]</td>
    </tr>
  </tfoot>
</table>


## 정답 코드

{% highlight java %}
import java.util.*;

class Solution {
    public static int[] solution(long num){
        String numStr = Long.toString(num);
        int[] result = new int[numStr.length()];
        for (int i = numStr.length() - 1; i >= 0; i--){
            result[numStr.length()-1 - i] = numStr.charAt(i) - '0';
        }
//        Integer[] result = new Integer[numStr.length()];
//        for (int i = 0; i < numStr.length(); i++){
//            result[i] = numStr.charAt(i) - '0';
//        }
//        Arrays.sort(result,Comparator.reverseOrder());
        return result;
    }
}
{% endhighlight %}
