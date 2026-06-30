---
title: 热力学与统计物理
---

# 热力学与统计物理

本页先整理统计物理部分。目标不是重讲教材，而是把考试时最常用的定义、公式、推导入口、二级结论和标准题型压成一份可直接调用的突击讲义。

## 0. 符号表与一页总览

| 符号 | 含义 | 常用关系 |
|---|---|---|
| $k_B$ | Boltzmann 常数 | $R=N_A k_B$ |
| $T$ | 热力学温度 | $\beta=1/(k_B T)$ |
| $\Omega(E,V,N)$ | 微正则可及微观态数或相空间体积 | $S=k_B\ln\Omega$ |
| $Z(T,V,N)$ | 正则配分函数 | $F=-k_B T\ln Z$ |
| $\Xi(T,V,\mu)$ | 巨正则配分函数 | $\Phi=-k_B T\ln\Xi=-pV$ |
| $F$ | Helmholtz 自由能 | $F=U-TS$ |
| $\Phi$ | 巨势 | $\Phi=U-TS-\mu N$ |
| $\mu$ | 化学势 | $\mu=(\partial F/\partial N)_{T,V}$ |
| $\lambda_T$ | 热 de Broglie 波长 | $\lambda_T=h/\sqrt{2\pi m k_B T}$ |
| $g(\varepsilon)$ | 单粒子能级态密度 | $\sum_i\to\int g(\varepsilon)\,d\varepsilon$ |
| $z$ | 逸度 | $z=e^{\beta\mu}$ |

最核心的路线只有三步：

1. 微观态计数给熵：$S=k_B\ln\Omega$。
2. 与热库或粒子库接触后，对不可控变量求和：$Z=\sum e^{-\beta E}$，$\Xi=\sum e^{-\beta(E-\mu N)}$。
3. 配分函数一旦写对，热力学量用导数拿：

$$
\begin{aligned}
F&=-k_B T\ln Z,\\
U&=-\frac{\partial \ln Z}{\partial \beta},\\
S&=-\left(\frac{\partial F}{\partial T}\right)_{V,N},\\
p&=-\left(\frac{\partial F}{\partial V}\right)_{T,N},\\
\Phi&=-k_B T\ln\Xi,\\
N&=\frac{1}{\beta}\left(\frac{\partial \ln\Xi}{\partial \mu}\right)_{T,V}.
\end{aligned}
$$

## 1. 基本原理：微观态、相空间与熵

### 核心公式

孤立平衡体系中，满足宏观约束 $(E,V,N)$ 的可及微观态等概率：

$$
P_i=\frac{1}{\Omega},\qquad S=k_B\ln\Omega.
$$

经典连续相空间中，态数不是简单点数，而是相空间体积除以量子胞：

$$
\Omega(E,V,N)=\frac{1}{N!h^{3N}}\int_{E<H(\mathbf q,\mathbf p)<E+\Delta E}d^{3N}q\,d^{3N}p.
$$

其中 $H$ 是 Hamiltonian，$h$ 是 Planck 常数，$1/N!$ 修正全同粒子不可分辨性，$\Delta E$ 是宏观小、微观大的能壳厚度。

更一般的 Gibbs/Shannon 熵为

$$
S=-k_B\sum_i p_i\ln p_i.
$$

当 $p_i=1/\Omega$ 时，它退化为 Boltzmann 熵 $S=k_B\ln\Omega$。

### 推导抓手

从“热平衡时熵最大”出发。两个弱耦合孤立体系 $A+B$ 总能量固定：

$$
\Omega_{tot}(E_A)=\Omega_A(E_A)\Omega_B(E-E_A).
$$

平衡条件是 $\ln\Omega_{tot}$ 最大：

$$
\frac{\partial S_A}{\partial E_A}=\frac{\partial S_B}{\partial E_B}.
$$

由此定义

$$
\frac{1}{T}=\left(\frac{\partial S}{\partial E}\right)_{V,N}.
$$

### 二级结论

- 熵最大等价于最概然宏观态；大体系中最概然态与平均态等价。
- $S$ 必须可加，因此态数相乘时熵取对数：$\Omega_{AB}=\Omega_A\Omega_B\Rightarrow S_{AB}=S_A+S_B$。
- 负温度要求能谱有上界；若能量越高态数越少，则 $\partial S/\partial E<0$，所以 $T<0$。

## 2. 三大系综一眼比对

| 系综 | 控制量 | 微观概率 | 配分函数/态数 | 特性函数 | 一句话记忆 |
|---|---|---|---|---|---|
| 微正则 | $E,V,N$ | $P_i=1/\Omega$ | $\Omega(E,V,N)$ | $S=k_B\ln\Omega$ | 孤立，数态 |
| 正则 | $T,V,N$ | $P_i=e^{-\beta E_i}/Z$ | $Z=\sum_i e^{-\beta E_i}$ | $F=-k_B T\ln Z$ | 接热库，能量可涨落 |
| 巨正则 | $T,V,\mu$ | $P_{i,N}=e^{-\beta(E_{i,N}-\mu N)}/\Xi$ | $\Xi=\sum_N\sum_i e^{-\beta(E_{i,N}-\mu N)}$ | $\Phi=-k_B T\ln\Xi$ | 接热库和粒子库 |

### 2.1 微正则系综

核心公式：

$$
S(E,V,N)=k_B\ln\Omega,\qquad
\frac{1}{T}=\left(\frac{\partial S}{\partial E}\right)_{V,N},
$$

$$
\frac{p}{T}=\left(\frac{\partial S}{\partial V}\right)_{E,N},\qquad
-\frac{\mu}{T}=\left(\frac{\partial S}{\partial N}\right)_{E,V}.
$$

变量含义：$p$ 是压强，$\mu$ 是化学势。上式来自热力学基本关系

$$
dE=T\,dS-p\,dV+\mu\,dN.
$$

二级结论：

- 微正则题的第一步永远是“写 $\Omega$ 或 $\ln\Omega$”。
- 若问平衡分配，最大化 $S_A+S_B$。
- 若问温度、压强、化学势，对 $S(E,V,N)$ 求偏导。

### 2.2 正则系综的第一性原理推导

系统 $S$ 与大热库 $B$ 弱接触，总能量 $E_{tot}$ 固定。系统处于能量 $E_i$ 的概率正比于热库态数：

$$
P_i\propto \Omega_B(E_{tot}-E_i).
$$

对热库熵展开：

$$
\ln\Omega_B(E_{tot}-E_i)
=\frac{S_B(E_{tot})}{k_B}-\frac{E_i}{k_B T}+O(E_i^2).
$$

忽略高阶小量得

$$
P_i=\frac{e^{-\beta E_i}}{Z},\qquad
Z=\sum_i e^{-\beta E_i},\qquad \beta=\frac{1}{k_B T}.
$$

核心导数：

$$
F=-k_BT\ln Z,\qquad
U=\langle E\rangle=-\frac{\partial \ln Z}{\partial \beta},
$$

$$
S=k_B(\ln Z+\beta U),\qquad
C_V=\left(\frac{\partial U}{\partial T}\right)_V.
$$

能量涨落：

$$
\langle(\Delta E)^2\rangle
=\langle E^2\rangle-\langle E\rangle^2
=\frac{\partial^2\ln Z}{\partial\beta^2}
=k_B T^2 C_V.
$$

二级结论：

- 若 $Z_N=z_1^N/N!$，则 $F=-Nk_BT\ln z_1+k_BT\ln N!$。
- 若 $Z$ 可分解为 $Z=Z_aZ_b$，则 $F=F_a+F_b$，$U=U_a+U_b$。
- 多个独立自由度的热容可直接相加。

### 2.3 巨正则系综的第一性原理推导

系统可与库交换能量和粒子。概率正比于库的态数：

$$
P_{i,N}\propto \Omega_B(E_{tot}-E_{i,N},N_{tot}-N).
$$

展开库熵：

$$
dS_B=\frac{1}{T}dE_B-\frac{\mu}{T}dN_B,
$$

代入 $dE_B=-E_{i,N}$、$dN_B=-N$ 得

$$
P_{i,N}=\frac{e^{-\beta(E_{i,N}-\mu N)}}{\Xi},
\qquad
\Xi=\sum_{N=0}^{\infty}\sum_i e^{-\beta(E_{i,N}-\mu N)}.
$$

核心导数：

$$
\Phi=-k_BT\ln\Xi,\qquad
\Phi=U-TS-\mu N=-pV,
$$

$$
\langle N\rangle=\frac{1}{\beta}\left(\frac{\partial\ln\Xi}{\partial\mu}\right)_{T,V},
\qquad
\langle E\rangle=-\frac{\partial\ln\Xi}{\partial\beta}+\mu\langle N\rangle.
$$

粒子数涨落：

$$
\langle(\Delta N)^2\rangle
=\frac{1}{\beta^2}\frac{\partial^2\ln\Xi}{\partial\mu^2}
=k_BT\left(\frac{\partial N}{\partial\mu}\right)_{T,V}.
$$

二级结论：

- 巨正则最适合处理量子气体，因为不同单粒子能级可独立求和。
- 若系统由独立能级 $r$ 组成，则 $\Xi=\prod_r \Xi_r$。
- 压强可直接由 $\ln\Xi$ 得到：$pV=k_BT\ln\Xi$。

## 3. 经典理想气体

### 核心公式

单粒子配分函数：

$$
z_1=\frac{1}{h^3}\int d^3q\,d^3p\,e^{-\beta p^2/(2m)}
=\frac{V}{\lambda_T^3},
\qquad
\lambda_T=\frac{h}{\sqrt{2\pi m k_BT}}.
$$

$N$ 个全同、稀薄、非相互作用粒子的正则配分函数：

$$
Z_N=\frac{z_1^N}{N!}=\frac{1}{N!}\left(\frac{V}{\lambda_T^3}\right)^N.
$$

用 Stirling 公式 $\ln N!\simeq N\ln N-N$ 得

$$
F=-Nk_BT\left[\ln\left(\frac{V}{N\lambda_T^3}\right)+1\right].
$$

状态方程与能量：

$$
pV=Nk_BT,\qquad U=\frac{3}{2}Nk_BT,\qquad C_V=\frac{3}{2}Nk_B.
$$

Sackur-Tetrode 型熵：

$$
S=Nk_B\left[\ln\left(\frac{V}{N\lambda_T^3}\right)+\frac{5}{2}\right].
$$

### Maxwell 速度分布

三维速度分布：

$$
f(\mathbf v)=\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\left(-\frac{mv^2}{2k_BT}\right).
$$

速率分布：

$$
P(v)=4\pi v^2\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\left(-\frac{mv^2}{2k_BT}\right).
$$

三个常用速度：

$$
v_p=\sqrt{\frac{2k_BT}{m}},\qquad
\bar v=\sqrt{\frac{8k_BT}{\pi m}},\qquad
v_{rms}=\sqrt{\frac{3k_BT}{m}}.
$$

其中 $v_p$ 是最概然速率，$\bar v$ 是平均速率，$v_{rms}$ 是方均根速率。

### 能量均分定理

若 Hamiltonian 中某自由度以二次型出现，如 $ax^2$ 或 $bp^2$，则该二次项平均能量为

$$
\left\langle ax^2\right\rangle=\frac{1}{2}k_BT.
$$

二级结论：

- 单原子理想气体有 $3$ 个平动二次项，所以 $U=3Nk_BT/2$。
- 经典一维谐振子有动能和势能两个二次项，所以 $\langle E\rangle=k_BT$。
- 低温量子冻结时不能乱用均分定理。

## 4. 三种分布：MB、BE、FD

对单粒子能级 $\varepsilon_r$，平均占据数统一写成

$$
\bar n_r=\frac{1}{e^{\beta(\varepsilon_r-\mu)}-\eta},
$$

其中

| 分布 | $\eta$ | 占据数 | 粒子特点 |
|---|---:|---|---|
| Maxwell-Boltzmann | $0$ | $\bar n_r=e^{-\beta(\varepsilon_r-\mu)}$ | 稀薄经典极限 |
| Bose-Einstein | $+1$ | $\bar n_r=1/(e^{\beta(\varepsilon_r-\mu)}-1)$ | 玻色子，可多重占据 |
| Fermi-Dirac | $-1$ | $\bar n_r=1/(e^{\beta(\varepsilon_r-\mu)}+1)$ | 费米子，每态最多一个 |

巨正则单能级推导：

玻色子 $n=0,1,2,\cdots$：

$$
\Xi_r=\sum_{n=0}^{\infty}e^{-\beta n(\varepsilon_r-\mu)}
=\frac{1}{1-ze^{-\beta\varepsilon_r}},
$$

$$
\bar n_r=z\frac{\partial\ln\Xi_r}{\partial z}
=\frac{1}{e^{\beta(\varepsilon_r-\mu)}-1}.
$$

费米子 $n=0,1$：

$$
\Xi_r=1+e^{-\beta(\varepsilon_r-\mu)},
\qquad
\bar n_r=\frac{1}{e^{\beta(\varepsilon_r-\mu)}+1}.
$$

经典极限条件：

$$
z=e^{\beta\mu}\ll 1,\qquad n\lambda_T^3\ll 1.
$$

二级结论：

- Bose 气体要求 $\mu\le \varepsilon_0$，通常取基态能量 $\varepsilon_0=0$，所以 $\mu\le0$。
- Fermi 气体在 $T=0$ 时 $\bar n=1$ for $\varepsilon<\varepsilon_F$，$\bar n=0$ for $\varepsilon>\varepsilon_F$。
- 非简并极限下 BE/FD 都退化为 MB。

## 5. 态密度与高温量子修正

自由粒子三维态密度：

$$
g(\varepsilon)d\varepsilon
=\frac{g_s V}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}
\varepsilon^{1/2}d\varepsilon.
$$

其中 $g_s=2s+1$ 是自旋简并度，$\hbar=h/(2\pi)$。

粒子数与能量：

$$
N=\int_0^\infty g(\varepsilon)\bar n(\varepsilon)d\varepsilon,
\qquad
U=\int_0^\infty \varepsilon g(\varepsilon)\bar n(\varepsilon)d\varepsilon.
$$

高温低密度展开的记忆式：

$$
\frac{pV}{Nk_BT}=1+\frac{B_2}{v}+\cdots,\qquad v=\frac{V}{N}.
$$

理想量子气体二阶修正符号：

$$
B_2=
\begin{cases}
-\lambda_T^3/2^{5/2}, & \text{Bose},\\
+\lambda_T^3/2^{5/2}, & \text{Fermi}.
\end{cases}
$$

考试记忆：Bose 有效吸引，压强比经典小；Fermi 有效排斥，压强比经典大。

## 6. 理想 Bose 气体与 BEC（玻色-爱因斯坦凝聚）

### 核心公式

取基态能量为 $0$。激发态粒子数为

$$
N_{ex}=\frac{V}{\lambda_T^3}g_{3/2}(z),
\qquad
g_\alpha(z)=\sum_{l=1}^{\infty}\frac{z^l}{l^\alpha}.
$$

因为 Bose 气体 $\mu\le0$，所以 $0<z\le1$。激发态最多容纳

$$
N_{ex}^{max}=\frac{V}{\lambda_T^3}\zeta(3/2).
$$

临界温度由 $N=N_{ex}^{max}$ 给出：

$$
T_c=\frac{2\pi\hbar^2}{mk_B}
\left(\frac{n}{\zeta(3/2)}\right)^{2/3},
\qquad n=\frac{N}{V}.
$$

$T<T_c$ 时凝聚粒子数：

$$
\frac{N_0}{N}=1-\left(\frac{T}{T_c}\right)^{3/2}.
$$

能量：

$$
U=\frac{3}{2}k_BT\frac{V}{\lambda_T^3}g_{5/2}(z).
$$

$T<T_c$ 时 $z=1$：

$$
U=\frac{3}{2}Nk_BT\frac{\zeta(5/2)}{\zeta(3/2)}
\,\left(\frac{T}{T_c}\right)^{3/2}.
$$

更常用写法是

$$
U=\frac{3}{2}Nk_BT_c
\frac{\zeta(5/2)}{\zeta(3/2)}
\,\left(\frac{T}{T_c}\right)^{5/2}.
$$

上式展示比例关系 $U\propto T^{5/2}$，所以 $C_V\propto T^{3/2}$。

### 推导抓手

1. 写 $\bar n(\varepsilon)=1/(e^{\beta(\varepsilon-\mu)}-1)$。
2. 把激发态求和换成态密度积分。
3. 注意 $\mu$ 最高只能到 $0$，于是激发态粒子数有上限。
4. 若总粒子数超过上限，多余粒子只能堆到基态。

### 二级结论

- BEC 即玻色-爱因斯坦凝聚，不等于相互作用导致的液化；理想 Bose 气体也可发生。
- 三维盒中会 BEC，因为 $g_{3/2}(1)=\zeta(3/2)$ 有限。
- 二维均匀理想 Bose 气体在热力学极限无有限温 BEC，因为对应积分红外发散。
- 凝聚后 $\mu=0$，温度再降也不变。

## 7. 理想 Fermi 气体

### 零温公式

三维自旋 $1/2$ Fermi 气体，$g_s=2$。费米波矢：

$$
k_F=(3\pi^2 n)^{1/3}.
$$

费米能：

$$
\varepsilon_F=\frac{\hbar^2k_F^2}{2m}
=\frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}.
$$

费米温度：

$$
T_F=\frac{\varepsilon_F}{k_B}.
$$

零温能量与压强：

$$
U_0=\frac{3}{5}N\varepsilon_F,
\qquad
p_0=\frac{2}{5}n\varepsilon_F,
\qquad
pV=\frac{2}{3}U.
$$

### 低温 Sommerfeld 结论

当 $T\ll T_F$：

$$
\mu(T)\simeq \varepsilon_F\left[1-\frac{\pi^2}{12}\left(\frac{T}{T_F}\right)^2\right],
$$

$$
U\simeq U_0\left[1+\frac{5\pi^2}{12}\left(\frac{T}{T_F}\right)^2\right],
$$

$$
C_V\simeq \frac{\pi^2}{2}Nk_B\frac{T}{T_F}.
$$

二级结论：

- Fermi 气体低温热容正比 $T$，不是经典常数。
- 只有费米面（Fermi 面）附近宽度约 $k_BT$ 的粒子能被热激发。
- 白矮星简并压本质来自 Pauli 不相容，与温度关系弱。

## 8. 光子气体、热辐射与固体热容

### 光子气体

光子数不守恒，所以

$$
\mu_\gamma=0.
$$

Planck 分布：

$$
\bar n(\omega)=\frac{1}{e^{\beta\hbar\omega}-1}.
$$

能量密度：

$$
u(T)=aT^4,\qquad
a=\frac{\pi^2k_B^4}{15\hbar^3c^3}.
$$

压强：

$$
p=\frac{u}{3}.
$$

Stefan-Boltzmann 辐射出射度：

$$
j^\star=\sigma T^4,\qquad
\sigma=\frac{ac}{4}.
$$

二级结论：

- 光子气体满足 $U=3pV$。
- 熵 $S=4U/(3T)$。
- Wien 位移来自对谱分布求极值：$\lambda_mT=\text{const}$。

### 固体热容

Einstein 模型：

$$
C_V=3Nk_B
\left(\frac{\theta_E}{T}\right)^2
\,\frac{e^{\theta_E/T}}{(e^{\theta_E/T}-1)^2}.
$$

Debye 低温结论：

$$
C_V\simeq \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\theta_D}\right)^3.
$$

高温极限：

$$
C_V\to 3Nk_B.
$$

二级结论：

- 经典固体热容 $3Nk_B$ 是 Dulong-Petit 定律。
- 低温声子态密度 $g(\omega)\propto\omega^2$，所以 $C_V\propto T^3$。
- 电子热容 $C_e\propto T$，低温金属常写 $C=\gamma T+\alpha T^3$。

## 9. Ising 模型、平均场与 Landau 理论

### Ising 模型

Hamiltonian：

$$
H=-J\sum_{\langle ij\rangle}s_is_j-h\sum_i s_i,\qquad s_i=\pm1.
$$

$J>0$ 为铁磁相互作用，$h$ 为外场，$\langle ij\rangle$ 表示最近邻。

平均场近似把邻居替换为平均磁化 $m=\langle s\rangle$：

$$
H_i^{MF}=-(zJm+h)s_i,
$$

其中 $z$ 是配位数。自洽方程：

$$
m=\tanh[\beta(zJm+h)].
$$

临界温度：

$$
k_BT_c=zJ.
$$

推导抓手：在 $h=0$、$m\to0$ 时，$\tanh x\simeq x$，非零解出现条件为 $\beta zJ>1$。

二级结论：

- $T>T_c$ 只有 $m=0$。
- $T<T_c$ 出现两个对称解 $m=\pm m_0$，对应自发对称破缺。
- 平均场给出的临界指数：$\beta_m=1/2$，$\gamma=1$，$\delta=3$，$\alpha=0$。这里 $\beta_m$ 是磁化临界指数，不是 $1/k_BT$。

### Landau 自由能

序参量 $\phi$ 的自由能展开：

$$
f(\phi)=f_0+\frac{a}{2}(T-T_c)\phi^2+\frac{b}{4}\phi^4-h\phi,\qquad b>0.
$$

平衡条件：

$$
\frac{\partial f}{\partial\phi}=a(T-T_c)\phi+b\phi^3-h=0.
$$

$h=0$ 时：

$$
\phi=0\quad (T>T_c),
$$

$$
\phi^2=\frac{a(T_c-T)}{b}\quad (T<T_c).
$$

二级结论：

- 序参量 $\phi\propto (T_c-T)^{1/2}$，所以 $\beta_m=1/2$。
- $T>T_c$，响应率 $\chi=(\partial\phi/\partial h)_{h=0}=1/[a(T-T_c)]$，所以 $\gamma=1$。
- $T=T_c$，$h=b\phi^3$，所以 $\delta=3$。
- 若 $\phi^4$ 系数变负，需要加 $\phi^6$ 稳定项，常对应一阶相变。

## 10. 关联函数、Gaussian 理论与标度

关联函数：

$$
G(r)=\langle \phi(\mathbf r)\phi(0)\rangle-\langle\phi\rangle^2.
$$

临界点附近常用形式：

$$
G(r)\sim \frac{e^{-r/\xi}}{r^{d-2+\eta}},
$$

其中 $\xi$ 是关联长度，$d$ 是空间维数，$\eta$ 是异常维数。

关联长度发散：

$$
\xi\sim |t|^{-\nu},\qquad t=\frac{T-T_c}{T_c}.
$$

Gaussian 自由能：

$$
F[\phi]=\int d^dx\left[
\frac{a}{2}t\phi^2+\frac{c}{2}(\nabla\phi)^2
\right].
$$

动量空间关联函数：

$$
G(k)=\frac{k_BT}{at+ck^2}.
$$

所以

$$
\xi=\sqrt{\frac{c}{at}}\propto t^{-1/2}.
$$

平均场/Gaussian 结论：

$$
\nu=\frac{1}{2},\qquad \eta=0.
$$

常用标度律：

$$
\alpha+2\beta_m+\gamma=2 \quad \text{Rushbrooke},
$$

$$
\gamma=\beta_m(\delta-1) \quad \text{Widom},
$$

$$
\gamma=\nu(2-\eta) \quad \text{Fisher},
$$

$$
2-\alpha=d\nu \quad \text{Hyperscaling}.
$$

二级结论：

- Hyperscaling 高于上临界维数时会失效；Ising 的上临界维数 $d_c=4$。
- 看到“关联长度”优先写 $\xi\sim |t|^{-\nu}$。
- 看到“临界点无特征长度”优先写幂律关联。

## 11. 重整化群 RG 的考试型框架

Kadanoff 图像：把长度缩放 $b>1$，粗粒化后系统参数变化：

$$
K' = R_b(K).
$$

不动点：

$$
K^\star=R_b(K^\star).
$$

不动点附近线性化：

$$
u_i'=b^{y_i}u_i.
$$

其中 $u_i$ 是缩放场，$y_i$ 是 RG 本征指数。

分类：

- $y_i>0$：相关扰动，远离不动点。
- $y_i<0$：无关扰动，流向不动点。
- $y_i=0$：边际扰动，需要看高阶。

关联长度 RG：

$$
\xi(t)=b\,\xi(t'),\qquad t'=b^{y_t}t.
$$

取 $b=|t|^{-1/y_t}$ 得

$$
\xi\sim |t|^{-1/y_t},\qquad \nu=\frac{1}{y_t}.
$$

自由能密度标度：

$$
f_s(t,h)=b^{-d}f_s(b^{y_t}t,b^{y_h}h).
$$

二级结论：

- RG 题不会算时，先写“不动点 + 线性化 + 相关/无关 + 标度形式”。
- 临界指数来自不动点附近的本征值，不来自微观细节。
- 普适类由维数、序参量对称性、相互作用范围决定。

## 12. 例题模板

### 例题 1：二能级系统的正则系综

能级 $0,\epsilon$，单粒子配分函数

$$
z=1+e^{-\beta\epsilon}.
$$

$N$ 个可分辨独立粒子：

$$
Z=z^N=(1+e^{-\beta\epsilon})^N.
$$

平均能量：

$$
U=-\frac{\partial\ln Z}{\partial\beta}
=N\frac{\epsilon e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}}
=\frac{N\epsilon}{e^{\beta\epsilon}+1}.
$$

热容：

$$
C_V=Nk_B(\beta\epsilon)^2
\frac{e^{\beta\epsilon}}{(e^{\beta\epsilon}+1)^2}.
$$

跳步结论：低温 $C_V\to0$，高温 $C_V\to0$，中间有 Schottky 峰。

### 例题 2：一维量子谐振子

能级 $\varepsilon_n=\hbar\omega(n+1/2)$。

$$
Z=\sum_{n=0}^{\infty}e^{-\beta\hbar\omega(n+1/2)}
=\frac{e^{-\beta\hbar\omega/2}}{1-e^{-\beta\hbar\omega}}.
$$

平均能量：

$$
U=-\frac{\partial\ln Z}{\partial\beta}
=\frac{1}{2}\hbar\omega+
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}.
$$

高温极限：

$$
U\simeq k_BT.
$$

三维各向同性谐振子直接乘 $3$：

$$
U_{3D}=3\left[\frac{1}{2}\hbar\omega+
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}\right].
$$

### 例题 3：经典理想气体

从单粒子配分函数

$$
z_1=\frac{V}{\lambda_T^3}
$$

得

$$
Z_N=\frac{1}{N!}\left(\frac{V}{\lambda_T^3}\right)^N.
$$

自由能

$$
F=-k_BT\ln Z_N.
$$

压强：

$$
p=-\left(\frac{\partial F}{\partial V}\right)_{T,N}
=\frac{Nk_BT}{V}.
$$

能量：

$$
U=-\frac{\partial\ln Z_N}{\partial\beta}
=\frac{3}{2}Nk_BT.
$$

### 例题 4：巨正则单能级推出 BE/FD

若单能级能量为 $\varepsilon$。玻色：

$$
\Xi=\sum_{n=0}^{\infty}(ze^{-\beta\varepsilon})^n
=\frac{1}{1-ze^{-\beta\varepsilon}}.
$$

$$
\bar n=z\frac{\partial\ln\Xi}{\partial z}
=\frac{ze^{-\beta\varepsilon}}{1-ze^{-\beta\varepsilon}}
=\frac{1}{e^{\beta(\varepsilon-\mu)}-1}.
$$

费米：

$$
\Xi=1+ze^{-\beta\varepsilon},
\qquad
\bar n=\frac{ze^{-\beta\varepsilon}}{1+ze^{-\beta\varepsilon}}
=\frac{1}{e^{\beta(\varepsilon-\mu)}+1}.
$$

### 例题 5：BEC 临界温度与凝聚比例

给定密度 $n=N/V$。临界条件：

$$
n=\frac{1}{\lambda_{T_c}^3}\zeta(3/2).
$$

代入 $\lambda_T=h/\sqrt{2\pi mk_BT}$：

$$
T_c=\frac{2\pi\hbar^2}{mk_B}
\left(\frac{n}{\zeta(3/2)}\right)^{2/3}.
$$

若 $T<T_c$：

$$
N_0=N-N_{ex}
=N\left[1-\left(\frac{T}{T_c}\right)^{3/2}\right].
$$

考试跳步：只要题目是三维均匀理想 Bose 气体，看到“凝聚比例”就直接写上式。

### 例题 6：零温 Fermi 气体

态数填充到 $k_F$：

$$
N=2\frac{V}{(2\pi)^3}\frac{4\pi k_F^3}{3}.
$$

所以

$$
k_F=(3\pi^2 n)^{1/3}.
$$

能量：

$$
U=2\frac{V}{(2\pi)^3}\int_0^{k_F}
\frac{\hbar^2k^2}{2m}4\pi k^2\,dk
=\frac{3}{5}N\varepsilon_F.
$$

压强：

$$
p=-\left(\frac{\partial U}{\partial V}\right)_N
=\frac{2}{5}n\varepsilon_F.
$$

### 例题 7：光子气体 Stefan-Boltzmann 结论

用态密度

$$
g(\omega)d\omega=\frac{V}{\pi^2c^3}\omega^2d\omega
$$

和 Planck 分布：

$$
U=\int_0^\infty
\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}
\frac{V}{\pi^2c^3}\omega^2d\omega.
$$

令 $x=\beta\hbar\omega$：

$$
U=\frac{V(k_BT)^4}{\pi^2\hbar^3c^3}
\int_0^\infty\frac{x^3}{e^x-1}dx.
$$

用积分

$$
\int_0^\infty\frac{x^3}{e^x-1}dx=\frac{\pi^4}{15}
$$

得

$$
\frac{U}{V}=aT^4,\qquad
a=\frac{\pi^2k_B^4}{15\hbar^3c^3}.
$$

### 例题 8：Ising 平均场临界温度

平均场自洽方程：

$$
m=\tanh(\beta zJm).
$$

临界点附近 $m$ 很小：

$$
\tanh(\beta zJm)\simeq \beta zJm-\frac{(\beta zJm)^3}{3}.
$$

非零解出现的条件：

$$
\beta_c zJ=1.
$$

所以

$$
k_BT_c=zJ.
$$

### 例题 9：Landau 理论求临界指数

令 $h=0$：

$$
f=f_0+\frac{a}{2}(T-T_c)\phi^2+\frac{b}{4}\phi^4.
$$

平衡条件：

$$
a(T-T_c)\phi+b\phi^3=0.
$$

$T<T_c$ 的非零解：

$$
\phi=\left[\frac{a(T_c-T)}{b}\right]^{1/2}.
$$

故

$$
\beta_m=\frac{1}{2}.
$$

$T>T_c$ 且小外场 $h$：

$$
a(T-T_c)\phi=h,
$$

所以

$$
\chi=\frac{\partial\phi}{\partial h}=\frac{1}{a(T-T_c)},
\qquad \gamma=1.
$$

### 例题 10：Saddle point 与 RG 答题模板

若配分函数可写为

$$
Z=\int dx\,e^{-Nf(x)},
$$

大 $N$ 极限由 saddle point $x_0$ 控制：

$$
f'(x_0)=0,\qquad
Z\simeq e^{-Nf(x_0)}
\sqrt{\frac{2\pi}{Nf''(x_0)}}.
$$

自由能密度：

$$
\frac{F}{N}\simeq k_BT f(x_0).
$$

RG 题模板：

$$
f_s(t,h)=b^{-d}f_s(b^{y_t}t,b^{y_h}h),
\qquad
\xi(t)=b\xi(b^{y_t}t).
$$

取 $b=|t|^{-1/y_t}$：

$$
\xi\sim |t|^{-1/y_t},\qquad \nu=1/y_t.
$$

若不会继续，就写“临界指数由不动点线性化本征值决定；微观参数只影响非普适幅度”。
