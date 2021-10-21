<template>
<div class="card">
    <div class="back"><p></p></div>
    
    <div class="info">
        <div class="infoImg">
            <div id="infoImg">
                <slot name="infoImg">
                 
                </slot>
            </div>
        </div>

        <div class="infoPerson">
            <div id="infoPerson">
                <div class="infoName">
                    <p>
                        <slot name="infoName"></slot>
                    </p>
                </div>
                <div class="infoAge">
                    <p>
                        <slot name="infoAge"></slot>
                    </p>
                </div>
                <div class="infoPlace">
                    <p>
                        <slot name="infoPlace"></slot>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="follows">
        <div>
            <p>
               <strong>
                 <slot name="follows"></slot>
               </strong>
            </p>
            <p>
                Followers
            </p>
        </div>
        <div>
              <p>
               <strong>
                   <slot name="likes"></slot>
               </strong>
            </p>
            <p>
                Likes
            </p>
        </div>
        <div>
              <p>
               <strong>
                   <slot name="Photos"></slot>
               </strong>
            </p>
            <p>
                Photos
            </p>
        </div>
    </div>
</div>
</template>

<style>
.back {
    background-image: url('../assets/images/bg-pattern-card.svg');
}
</style>