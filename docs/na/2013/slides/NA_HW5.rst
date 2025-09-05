*************
NA HW5 - SNMP
*************

- Due **6/9**
- Discuss with your classmates and TAs on IRC if you have any question.


Part 1 - SNMP (30%)
===================
- community Access Control. (10%)
    - On bsd1-6.
    - ``narouser`` can read the SNMP info while ``public`` can't.

- IP address Access Control. (10%)
    - Use ``narouser`` community.
    - On bsd1-6 can read ``.1.3.6.1.2.1.25.3.2.1.3`` while linux1-6 can't.
        - ``HOST-RESOURCES-MIB::hrDeviceDescr``

- Write Access Control (10%)
    - On bsd1-6.
    - Set ``1.3.6.1.2.1.1.4.0`` to the value given at demo.
        - ``SNMPv2-MIB::sysContact.0``
    - ``narwuser`` can set the value, while ``narouser`` can't.


Part 2 - RRD (20%)
==================
- Draw your file system usage graph.
    - Use ``df`` command to get your file system usage.
    - Monitor one of the file system. Update it every minute.
    - Draw the graph in the past 1 hour.
    - Output file should be in PNG format.

- Example: http://people.cs.nctu.edu.tw/~chiachunt/html/diskusage.png


Part 3 - cacti (50%)
====================
- Show localhost CPU loading info graph. (15%)
- Show localhost network traffic graph. (15%)
- Show the other computer's network traffic graph. (20%)


Bonus - Make your own graph
===========================
- Make your own data template, graph template, and draw your own graph.
- What graphs you can make:
    - Calculate the memory used instead of memory free.
    - Calculate the times of login failed.

