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

> 길이가 같은 배열 A, B 두개가 있습니다. 각 배열은 자연수로 이루어져 있습니다.  
배열 A, B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다.  
이러한 과정을 배열의 길이만큼 반복하며, 두 수를 곱한 값을 누적하여 더합니다.  
이때 최종적으로 누적된 값이 최소가 되도록 만드는 것이 목표입니다.  
(단, 각 배열에서 k번째 숫자를 뽑았다면 다음에 k번째 숫자는 다시 뽑을 수 없습니다.)
    
### 제한사항

> 배열 A, B의 크기 : 1,000 이하의 자연수  
배열 A, B의 원소의 크기 : 1,000 이하의 자연수

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
