<?php
/*
  Ellipsis a passed string. Default limit = 35
*/
function ellipsis($string)
{
    return mb_strlen($string) > 35 ? mb_substr($string, 0, 34) . "..." : $string;
}

/*
  Colorize a word inside a text with a color
  Params: text, word, color
*/
function highlight($text, $word, $color)
{
    if (strlen($text) > 0 && strlen($word) > 0)
    {
        return (str_ireplace($word, "<span style='color:$color;'><b>{$word}</b></span>", $text));
    }
    return "";
}

/*
  Format a datetime to a elapsed string format:
    just now,
    7 days ago,
    1 month ago
*/
function timeElapsedSinceNow($datetime, $level = 7)
{
    // last minute is "just now"
    if (time() - $datetime <= 60)
        return 'just now';

    $now = new DateTime;
    $then = new DateTime('@'.$datetime);
    $diff = (array) $now->diff( $then );

    $diff['w']  = floor( $diff['d'] / 7 );
    $diff['d'] -= $diff['w'] * 7;

    $string = array(
        'y' => 'yr',
        'm' => 'mo',
        'w' => 'wk',
        'd' => 'day',
        'h' => 'h',
        'i' => 'min',
        's' => 'sec',
    );

    foreach( $string as $k => & $v )
    {
        if ( $diff[$k] )
        {
            $v = $diff[$k] . ' ' . $v ;
        }
        else
        {
            unset( $string[$k] );
        }
    }

    $string = array_slice( $string, 0, $level );
    return $string ? implode( ', ', $string ) : 'just now'; //. ' ago' : 'just now';
}

/*
  Average 2 numbers by a given factor. Default 2
*/
function avg_val($val1, $val2, $factor = 2.0)
   {
       $r = 0;

       if (!is_numeric($val1) && !is_numeric($val2))
           $r = 0;
       else if (!is_numeric($val1))
           $r = $val2;
       else if (!is_numeric($val2))
           $r = $val1;
       else
           $r = ($val1 + $val2) / $factor;

       return $r;
   }

/*
  Smoothes values inside an array.
  Depends on function avg_val declared above.
*/
function smoothValues($array)
{
   $xNew = array();
   for ($i = 0; $i < count($array); $i += 2)
   {
       $xVal1 = $array[$i];
       $xVal2 = ($i + 1 < count($array)) ? $array[$i + 1] : "ERROR";
       $x = avg_val($xVal1, $xVal2);
       $xNew[] = $x;
   }
   return $xNew;
}



// IS checkers
static function isEmail($string) {
        // $email_pattern = "/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/"; // easy pattern
        $email_pattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/"; // more complicate pattern
        if (preg_match($email_pattern, $string)) {
            return true;
        } else {
            return false;
        }
}

static function isPhone($string) {
        $phone_pattern= "/^(?!(?:\d*-){5,})(?!(?:\d* ){5,})\+?[\d- ]+$/";
        if (preg_match($phone_pattern, $string)) {
            return true;
        } else {
            return false;
        }
}

static function isPrice($string) {
        $price_pattern="/(^[1-9])([0-9]*)(,[[:digit:]]{2})/";
        if (preg_match($price_pattern, $string)) {
            return true;
        } else {
            return false;
        }
}

static function isInt($string) {
        $int_pattern = "/(^[1-9]\d*$|0)/";
        if (!preg_match($int_pattern, $string)) {
            return false;
        } else {
             return true;
        }
}

static function isPassword($string, $min, $max) {
        // return true if regular expression is matched
        // Check password and match against the confirmed password:
        $regex='/^[a-zA-Z0-9_]{' . $min . ',' . $max . '}$/';
        if (preg_match($regex, $string)) {
            return true;
        } else {
            return false;
        }
}

static function isEmptyString($string) {
        if (strlen(trim($string)) === 0) {
            return true;
        } else {
            return false;
        }
}
?>
