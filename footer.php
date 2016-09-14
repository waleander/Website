
    <footer class="footer-section">
        <div class="container">
            <div class="row mt-30 mb-30">
                <div class="col-md-12 text-center">
                    <!-- Footer Copy Right Text -->
                    
                    
                    <div class="optin_form">
                    	<h3>Subscribe to our newsletter</h3>
						<p>Stay fresh digitally. We will never sell, rent or share your email address.</p>
						<form action="//bigfielddigital.us12.list-manage.com/subscribe/post?u=a4a15648e0cb7dfb102cc48a6&amp;id=73d26010d7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate pure-form" target="_blank">
							<input type="text" value="" name="FNAME" class="name txt_name" id="" placeholder="Your name" required>
							<input type="email" value="" name="EMAIL" class="email txt_email" id="" placeholder="Your email address" required>
							<button type="submit" class="btn_submit">Subscribe now</button>
						</form>
                    </div>

                    <!-- Footer Social Icons -->
                    <div class="social-icons mt-30">
                        <a href="https://www.facebook.com/bigfielddigital/"><i class="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/bigfielddigital/"><i class="fa fa-twitter"></i></a>
                        <a href="https://plus.google.com/+Bigfielddigital"><i class="fa fa-google-plus"></i></a>
                    </div>
                    
                    <div class="copyright-info">
                        <p class="copyright"> &copy; <?php echo date("Y", time()); ?> Big Field Digital Ltd., All rights reserved. Reg. #RC 1298110</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- End Of Footer Section -->

    <!-- Goole map API -->
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyCU8XyYIQN_aRgtU1L0h_5b01KjokfxPqU&sensor=true"></script>
    

    <!-- All JS Files -->
    <script src="js/all.min.js"></script>
      
	<script>
    $(function() {
        $("img.lazy").unveil();
    });
    </script>

   
    
   
    
    
    
      <!-- Google Analytics -->
       <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
		  ga('create', 'UA-64086434-1', 'auto');
		  ga('send', 'pageview');
		
		</script>
		
		
		<!--Start of Tawk.to Script-->
		<script type="text/javascript">
		var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
		(function(){
		var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
		s1.async=true;
		s1.src='https://embed.tawk.to/56aedec0fe87529955d68075/default';
		s1.charset='UTF-8';
		s1.setAttribute('crossorigin','*');
		s0.parentNode.insertBefore(s1,s0);
		})();
		</script>
		<!--End of Tawk.to Script-->

        <!-- Start of text typer code-->
           <script>
                var app;

            $(document).ready(function() {
              return app.init();
            });

            app = {
              text: "Building result-driven web solutions, helping our clients become more profitable",
              index: 0,
              chars: 0,
              speed: 200,
              self: this,
              container: ".text-typer .content",
              init: function() {
                this.chars = this.text.length;
                return this.write();
              },
              write: function() {
                $(this.container).append(this.text[this.index]);
                if (this.index < this.chars) {
                  this.index++;
                  return window.setTimeout(function() {
                    return app.write();
                  }, this.speed);
                }
              }
            };
            
        </script>
           
        <!-- End of texy type code-->

    </body>

    </body>
</html>
