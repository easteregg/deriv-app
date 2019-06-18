const texts_json = {};
texts_json['TH'] = {"Real":"จริง","Investment":"การลงทุน","Gaming":"การพนัน","Virtual":"เสมือน","Bitcoin":"บิทคอยน์","Bitcoin_Cash":"เงินสดบิทคอยน์","Ether":"อีเธอร์","Ether_Classic":"อีเธอร์คลาสสิก","Litecoin":"ไลท์คอยน์","Binary_Coin":"ไบนารีคอยน์","Online":"ออนไลน์","Offline":"ออฟไลน์","Connecting_to_server":"กำลังเชื่อมต่อกับเซิร์ฟเวอร์","Day":"วัน","Days":"วัน","Target":"เป้าหมาย","Open_Positions":"ตำแหน่งงานที่เปิดรับ","Duration":"ระยะเวลา","tick":"ช่วงห่างของราคา","ticks":"ช่วงห่างของราคา","Entry_spot":"สปอตเริ่มต้น","Exit_spot":"สปอตสิ้นสุด","Start_time":"เวลาเริ่ม","Hour":"ชั่วโมง","Minute":"นาที","Deposit":"ฝาก","Log_in":"เข้าสู่ระบบ","Sign_up":"ลงทะเบียน","Contract_Details":"รายละเอียดสัญญา","Portfolio":"พอร์ตโฟลิโอ","Profit_Table":"ตารางกำไร","Statement":"รายงานทางการเงิน","Trade":"เทรด","Personal_Details":"รายละเอียดส่วนบุคคล","Financial_Assessment":"การประเมินทางการเงิน","Account_Password":"รหัสผ่านของบัญชี","Cashier_Password":"รหัสผ่านสำหรับจัดการเงิน","Self_Exclusion":"การพักตัวเอง","Account_Limits":"วงเงินในบัญชี","Login_History":"ประวัติการเข้าใช้งาน","API_Token":"API โทเค่น","Log_out":"ออกจากระบบ","No":"ไม่ใช่","Yes":"ใช่","Ends_Outside":"สิ้นสุดภายนอก","Ends_Between":"สิ้นสุดระหว่าง","Stays_Between":"อยู่ระหว่าง","Goes_Outside":"ออกนอกขอบเขต","High_Tick":"ราคาสูง","Low_Tick":"ราคาต่ำสุด","Close-Low":"ปิด-ต่ำ","High-Close":"สูง-ปิด","High-Low":"สูง-ต่ำ","Call_Spread":"คอลสเปรด","Put_Spread":"พุทสเปรด","Higher":"สูงกว่า","Lower":"ต่ำกว่า","Jan":"ม.ค.","Feb":"ก.พ.","Mar":"มี.ค.","Apr":"เม.ย.","May":"พฤษภาคม","Jun":"มิ.ย.","Jul":"ก.ค.","Aug":"ส.ค.","Sep":"ก.ย.","Oct":"ต.ค.","Nov":"พ.ย.","Dec":"ธ.ค.","Monday":"วันจันทร์","Tuesday":"วันอังคาร","Wednesday":"วันพุธ","Thursday":"วันพฤหัสบดี","Friday":"วันศุกร์","Saturday":"วันเสาร์","Sunday":"วันอาทิตย์","Contract_Information":"ข้อมูลสัญญา","Profit/Loss":"กำไร/ขาดทุน","Purchase_Price":"ราคาซื้อ","Remaining_Time":"เวลาที่เหลืออยู่","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"สัญญาจะถูกจำหน่ายที่ราคาทั่วไปของตลาดเมื่อระบบซื้อขายได้รับการแจ้งความจำนง ราคานี้อาจจะแตกต่างจากราคาที่ระบุ","Sell":"ขาย","Your_transaction_reference_number_is_[_1]":"หมายเลขอ้างอิงของธุรกรรมของท่าน คือ [_1]","Close":"ปิด","The_page_you_requested_could_not_be_found__Either_it_no_longer_exists_or_the_address_is_wrong__Please_check_for_any_typos_":"ไม่พบหน้าที่ท่านเรียก หรือ หน้าดังกล่าวได้ถูกนำออกจากระบบ หรือ ท่านเรียกที่อยู่ไม่ถูกต้อง โปรดตรวจสอบตัวสะกด","Resale_not_offered":"การขายสัญญาไม่ได้ถูกนำเสนอ","Total":"ผลรวม","Contract_Type":"ประเภทของสัญญา","Potential_Payout":"ประมาณการจำนวนเงินที่ชำระ","Purchase":"ซื้อ","Indicative":"อินดิเคทีฟ","Transaction":"รายการธุรกรรม","Credit/Debit":"เครดิต/เดบิต","Balance":"คงเหลือ","Buy_price":"ราคาซื้อ","Open_positions":"ตำแหน่งงานที่เปิดรับ","Your_account_has_no_trading_activity_":"บัญชีของท่านไม่มีประวัติการซื้อขาย","Trade_now":"ซื้อขายทันที","Date":"วันที่","Ref_":"อ้างอิง","Description":"รายละเอียด","Action":"การกระทำ","Allow_equals":"ให้เท่ากับ","Win_payout_if_exit_spot_is_also_equal_to_entry_spot_":"ชนะ เมื่อสปอตสิ้นสุดเท่ากับสปอตเริ่มต้น","Last_Digit_Prediction":"การพยากรณ์ตัวเลขสุดท้าย","Now":"ขณะนี้","Profile":"ประวัติ","View_your_personal_information_":"ดูข้อมูลส่วนบุคคลของท่าน","Security_&_Limits":"วงเงินและหลักทรัพย์","Change_your_main_login_password_":"แก้ไขรหัสผ่านหลักของท่าน","Facility_that_allows_you_to_set_limits_on_your_account_":"การอำนวยความสะดวกเพื่อให้ท่านสามารถกำหนดวงเงินของบัญชีของท่าน","Limits":"วงเงิน","Set_Currency":"ตั้งค่าสกุลเงิน","Deposits_and_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"ได้มีการปิดการใช้งานการฝากและถอนเงินในบัญชีของท่าน โปรดตรวจสอบอีเมล์เพื่อศึกษารายละเอียดเพิ่มเติม","Withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"ได้มีการปิดการใช้งานการถอนเงินในบัญชีของท่าน กรุณาตรวจสอบอีเมล์เพื่อศึกษารายละเอียดเพิ่มเติม","MT5_withdrawals_have_been_disabled_on_your_account__Please_check_your_email_for_more_details_":"ได้มีการปิดการใช้งานการถอนเงิน MT5 ในบัญชีของท่าน โปรดตรวจสอบอีเมล์เพื่อศึกษารายละเอียดเพิ่มเติม","Start_Time":"เวลาเริ่ม","Entry_Spot":"สปอตเริ่มต้น","End_Time":"เวลาสิ้นสุด","Exit_Spot":"สปอตสิ้นสุด","Exit_Spot_Time":"เวลาที่สปอตสิ้นสุด","Payout":"การชำระเงิน","days":"วัน","day":"วัน","hours":"ชั่วโมง","hour":"ชั่วโมง","minutes":"นาที","minute":"นาที","seconds":"วินาที","Purchase_Time":"เวลาซื้อ","Stake":"วางเงิน","Multiplier":"ตัวคูณ","Ends_Between/Ends_Outside":"สิ้นสุดระหว่าง/สิ้นสุดนอกขอบเขต","Stays_Between/Goes_Outside":"อยู่ใน/นอกขอบเขต","Even/Odd":"ดิจิตคู่/ดิจิตคี่","Digits":"ตัวเลข (Digits)","Fiat":"เงินกระดาษ","Crypto":"การเข้ารหัสลับ","Trading_is_unavailable_at_this_time_":"ไม่สามารถทำการซื้อขายได้ในขณะนี้","Should_be_a_valid_number_":"ควรเป็นตัวเลขที่ถูกต้อง","Up_to_[_1]_decimal_places_are_allowed_":"ตำแหน่งทศนิยมถึง [_1] หลักเท่านั้น","Should_be_[_1]":"ควรเป็น [_1]","Should_be_between_[_1]_and_[_2]":"ต้องมีค่าระหว่าง [_1] และ [_2]","Should_be_more_than_[_1]":"ควรมีค่ามากกว่า [_1]","Should_be_less_than_[_1]":"ควรมีค่าน้อยกว่า [_1]","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_[_1]":"เฉพาะตัวอักษร ตัวเลข ช่องว่าง และอักขระพิเศษเหล่านี้เท่านั้นที่อนุญาต [_1]","The_two_passwords_that_you_entered_do_not_match_":"รหัสผ่านที่ท่านป้อนสองครั้งไม่เหมือนกัน","Invalid_email_address_":"อีเมล์ไม่ถูกต้อง","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"ตัวอักษร ตัวเลข ช่องว่าง ขีดกลาง จุด และ เครื่องหมายอัญประกาศ ( ' ) เท่านั้น ที่สามารถใช้ได้","You_should_enter_[_1]_characters_":"ท่านควรป้อนข้อมูล [_1] อักขระ","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"ตัวอักษร ช่องว่าง ขีดกลาง จุด และ เครื่องหมายอัญประกาศ ( ' ) เท่านั้น ที่สามารถใช้ได้","Minimum_of_[_1]_characters_required_":"จำนวนตัวอักขระน้อยที่สุดที่ต้องการ คือ [_1]","[_1]_and_[_2]_cannot_be_the_same_":"[_1] และ [_2] ไม่สามารถเป็นค่าเดียวกัน","Password_should_have_lower_and_uppercase_letters_with_numbers_":"รหัสผ่านควรประกอบด้วยอักษรตัวเล็ก อักษรตัวใหญ่ และตัวเลข","Only_letters,_numbers,_space,_and_hyphen_are_allowed_":"ตัวอักษร ตัวเลข ช่องว่าง และเครื่องหมายขีดกลางเท่านั้นที่อนุญาต","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"ควรเริ่มต้นด้วยอักษร หรือ ตัวเลข และอาจประกอบด้วยเครื่องหมายขีดกลาง และขีดล่าง"};