<template>
    <v-container fluid class="intro">
        <v-row>
            <v-col cols="12" md="7" class="intro-title">
                <v-img src="../../assets/img/company/title.png"/>
            </v-col>

            <v-col cols="12" md="5" class="intro-group d-flex flex-column justify-end">

                <div class="d-flex align-end justify-space-between">

                    <h1 class="title72">Company.</h1>
                    <v-btn
                        to="/history" class="btn16 op100"
                        :ripple="false"
                        elevation="0"
                        variant="plain">

                        <p class="view-btn">history →</p>
                    </v-btn>

                </div>
                
                <div class="intro-text d-flex justify-space-between align-center">
                <div class="f140 d-none d-sm-flex">(</div>
                <div class="intro-text-content d-flex flex-column">
                    <h2 class="title24">
                        2004년,<br>
                        사람 냄새가 나는 연기자들이 모여<br>
                        <span class="theme">‘나무엑터스’</span>가 되었습니다.
                    </h2>

                    <p class="date20">
                        깊이 뿌리를 내리고 무성한 잎을 키워가 연기자들이 쉬어갈 수 있는 시원한 그늘이 되자고 항상 다짐했습니다.<br>
                        처음 그 약속처럼, 소속 연기자들의 좋은 친구, 든든한 버팀목이자
                        엔터테이먼트 업계의 믿음직한 파트너로서
                        의미있는 문화 컨텐츠의 부흥을 위해 노력하겠습니다.
                    </p>
                </div>

                <div class="f140 d-none d-sm-flex">)</div>

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
