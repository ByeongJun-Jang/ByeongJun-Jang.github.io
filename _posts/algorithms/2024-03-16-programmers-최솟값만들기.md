---
date: 2024-03-16 00:00:00
layout: post
title: 프로그래머스 최솟값 만들기[자바]
subtitle: 프로그래머스 최솟값 만들기 Lv2[자바]
description: 자바언어로 최솟값 만들기
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

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/12941">최솟값 만들기</a>

## 문제 설명

> 
    
### 제한사항

> 

### 입출력 예

<table>
  <thead>
    <tr>
      <th>A</th>
      <th>B</th>
      <th>answer</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>[1, 4, 2]</td>
      <td>[5, 4, 4]</td>
      <td>29</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>[1, 2]</td>
      <td>[3, 4]</td>
      <td>10</td>
    </tr>
  </tbody>
</table>


## 정답 코드

{% highlight java %}
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.stream.Collectors;

class Solution
{
    public static int solution(int[] arr1, int[] arr2){
        int max = 0;
        Arrays.sort(arr1);
        Integer[] arr2Reverse = new Integer[arr2.length];
        for (int i = 0; i < arr2.length; i++){
            arr2Reverse[i] = arr2[i];
        }
        Arrays.sort(arr2Reverse, Collections.reverseOrder());
//        LinkedList<Integer> arr2List = Arrays.stream(arr2).boxed().collect(Collectors.toCollection(LinkedList::new));
//        arr2List.sort(Collections.reverseOrder());
        for (int i = 0; i < arr1.length; i++){
//            max += arr1[i] * arr2List.pollFirst();
            max += arr1[i] * arr2Reverse[i];
        }

        return max;
    }
}
{% endhighlight %}
